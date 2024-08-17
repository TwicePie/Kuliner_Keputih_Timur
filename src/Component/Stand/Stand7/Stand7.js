import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand7() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 7 | PENYETAN NASI UDUK</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/penyetan_ayam.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 7 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN TELOR</h2>
            <p>Rp.10.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/penyetan_ayam.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 7 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN AYAM</h2>
            <p>Rp.13.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/penyetan_ayam.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 7 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN LELE</h2>
            <p>Rp.14.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/penyetan_ayam.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 7 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN BEBEK</h2>
            <p>Rp.17.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand7;