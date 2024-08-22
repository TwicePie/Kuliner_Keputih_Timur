import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand15() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 15 | DAPOER MAMAQU</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 15 | DAPOER MAMAQU</p>
            <h2>NASI + AYAM GORENG</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 15 | DAPOER MAMAQU</p>
            <h2>NASI + LELE GORENG</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 15 | DAPOER MAMAQU</p>
            <h2>NASI + TAHU TEMPE GORENG</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand15;