import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand19() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 19 | PENYETAN NASI UDUK</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 19 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN TELOR</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 19 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN AYAM</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 19 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN LELE</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 19 | PENYETAN NASI UDUK</p>
            <h2>PENYETAN BEBEK</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand19;