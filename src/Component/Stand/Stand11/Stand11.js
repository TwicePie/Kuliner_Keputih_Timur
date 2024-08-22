import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand11() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 11 | BUAH SMOOTHIES</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 11 | BUAH SMOOTHIES</p>
            <h2>SMOOTHIES APEL</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 11 | BUAH SMOOTHIES</p>
            <h2>SMOOTHIES MANGGA</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 11 | BUAH SMOOTHIES</p>
            <h2>SMOOTHIES ANGGUR</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 11 | BUAH SMOOTHIES</p>
            <h2>SMOOTHIES MELON</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand11;