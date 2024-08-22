import React from 'react';
import Header from '../../Header/Header';
import './Stand1.css';  // Import CSS untuk Stand1

function Stand1() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 1 | WARKOP KAKA</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/warkop_kaka.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 1 | WARKOP KAKA</p>
            <h2>TEH RACIK</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/warkop_kaka.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 1 | WARKOP KAKA</p>
            <h2>KOPI IRENG</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/warkop_kaka.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 1 | WARKOP KAKA</p>
            <h2>POP ICE</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/warkop_kaka.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 1 | WARKOP KAKA</p>
            <h2>MIE INSTAN</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand1;