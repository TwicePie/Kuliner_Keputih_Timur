import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand20() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 20 | MARTABAK RAMEO</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 20 | MARTABAK RAMEO</p>
            <h2>MARTABAK AYAM</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 20 | MARTABAK RAMEO</p>
            <h2>MARTABAK SAPI</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 20 | MARTABAK RAMEO</p>
            <h2>TERANG BULAN 1 RASA</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 20 | MARTABAK RAMEO</p>
            <h2>TERANG BULAN 2 RASA</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand20;