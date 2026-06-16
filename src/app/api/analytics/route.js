import { BetaAnalyticsDataClient } from '@google-analytics/data';
import { google } from 'googleapis';

// Simple in-memory cache and rate limiter (per-process)
const CACHE_TTL_MS = 5 * 60 * 1000; // 5 minutes
const RATE_LIMIT_MAX = 60; // requests per minute
let cache = { data: null, expires: 0 };
let rate = { count: 0, resetAt: Date.now() + 60 * 1000 };

const credentials = {
  client_email: process.env.GOOGLE_CLIENT_EMAIL,
  private_key: process.env.GOOGLE_PRIVATE_KEY ? process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n') : undefined,
};

function ensureConfig() {
  if (!credentials.client_email || !credentials.private_key) {
    throw new Error('Missing GOOGLE_CLIENT_EMAIL or GOOGLE_PRIVATE_KEY in environment');
  }
  if (!process.env.GA4_PROPERTY_ID) throw new Error('Missing GA4_PROPERTY_ID in environment');
  if (!process.env.GSC_SITE_URL) throw new Error('Missing GSC_SITE_URL in environment');
}

// Fetch Google Analytics Data
async function getGA4Data() {
  try {
    ensureConfig();
    const client = new BetaAnalyticsDataClient({ credentials });

    const [response] = await client.runReport({
      property: `properties/${process.env.GA4_PROPERTY_ID}`,
      dimensions: [{ name: 'pagePath' }],
      metrics: [
        { name: 'totalUsers' },
        { name: 'newUsers' },
      ],
      dateRanges: [{ startDate: '28daysAgo', endDate: 'today' }],
      orderBys: [{ metric: { metricName: 'totalUsers' }, desc: true }],
      limit: 15,
    });

    if (!response || !response.rows) return [];

    return response.rows.map(row => ({
      page: row.dimensionValues?.[0]?.value || '/',
      totalUsers: Number(row.metricValues?.[0]?.value || 0),
      newUsers: Number(row.metricValues?.[1]?.value || 0),
    }));
  } catch (err) {
    console.error('Error fetching GA4 data:', err?.message || err);
    return []; // fail open with empty data so dashboard still renders
  }
}

// Fetch Search Console Data
async function getGSCData() {
  try {
    ensureConfig();
    const auth = new google.auth.GoogleAuth({
      credentials,
      scopes: ['https://www.googleapis.com/auth/webmasters.readonly'],
    });

    const searchconsole = google.searchconsole({ version: 'v1', auth });

    const response = await searchconsole.searchanalytics.query({
      siteUrl: process.env.GSC_SITE_URL,
      requestBody: {
        // Consider making these dynamic in production
        startDate: '2026-05-16',
        endDate: '2026-06-16',
        dimensions: ['page'],
        rowLimit: 15,
      },
    });

    return (response.data.rows || []).map(row => ({
      page: row.keys?.[0] || '/',
      clicks: Number(row.clicks || 0),
      position: row.position != null ? Number(row.position).toFixed(2) : '-',
    }));
  } catch (err) {
    console.error('Error fetching Search Console data:', err?.message || err);
    return [];
  }
}

export async function GET() {
  try {
    // Rate limiting (simple per-process limiter)
    const now = Date.now();
    if (now > rate.resetAt) {
      rate.count = 0;
      rate.resetAt = now + 60 * 1000;
    }
    rate.count += 1;
    if (rate.count > RATE_LIMIT_MAX) {
      return new Response(JSON.stringify({ error: 'Rate limit exceeded' }), {
        status: 429,
        headers: { 'Content-Type': 'application/json', 'Retry-After': '60' },
      });
    }

    // Return cached response if fresh
    if (cache.data && Date.now() < cache.expires) {
      return new Response(JSON.stringify(cache.data), {
        status: 200,
        headers: { 'Content-Type': 'application/json', 'X-Cache': 'HIT' },
      });
    }

    const [gaData, gscData] = await Promise.all([getGA4Data(), getGSCData()]);

    // Merge berdasarkan page path
    const merged = gaData.map(ga => {
      const gsc = gscData.find(g => {
        try {
          // g.page from Search Console can be full URL; compare pathnames
          return g.page.includes(ga.page) || ga.page === new URL(g.page).pathname;
        } catch (e) {
          return g.page === ga.page || g.page.includes(ga.page);
        }
      });
      return {
        page: ga.page,
        totalUsers: ga.totalUsers,
        newUsers: ga.newUsers,
        clicks: gsc?.clicks || 0,
        position: gsc?.position || '-',
      };
    });

    // Cache and return
    cache = { data: merged, expires: Date.now() + CACHE_TTL_MS };

    return new Response(JSON.stringify(merged), {
      status: 200,
      headers: { 'Content-Type': 'application/json', 'X-Cache': 'MISS' },
    });
  } catch (err) {
    console.error('Unexpected error in /api/analytics:', err);
    return new Response(JSON.stringify({ error: 'Internal Server Error' }), { status: 500, headers: { 'Content-Type': 'application/json' } });
  }
}
