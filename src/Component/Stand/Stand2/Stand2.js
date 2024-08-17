import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand2() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 2 | DIVA JUICE</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 2 | DIVA JUICE</p>
            <h2>JUS BUAH</h2>
            <p>Rp.12000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 2 | DIVA JUICE</p>
            <h2>SALAD BUAH</h2>
            <p>Rp.15000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 2 | DIVA JUICE</p>
            <h2>SOP BUAH</h2>
            <p>Rp.10000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 2 | DIVA JUICE</p>
            <h2>ES CAMPUR</h2>
            <p>Rp.10000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand2;