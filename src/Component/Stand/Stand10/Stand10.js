import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand10() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 10 | SEBLAK PRASMANAN</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>TTenant 10 | SEBLAK PRASMANAN</p>
            <h2>SEBLAK</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>TTenant 10 | SEBLAK PRASMANAN</p>
            <h2>TAHU CRISPY</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>TTenant 10 | SEBLAK PRASMANAN</p>
            <h2>JAMUR CRISPY</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>TTenant 10 | SEBLAK PRASMANAN</p>
            <h2>KENTANG CRISPY</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand10;