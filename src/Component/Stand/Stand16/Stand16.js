import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand16() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 16 | LONTONG KIKIL</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 16 | LONTONG KIKIL</p>
            <h2>LONTONG KIKIL</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 16 | LONTONG KIKIL</p>
            <h2>PENYETAN</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand16;