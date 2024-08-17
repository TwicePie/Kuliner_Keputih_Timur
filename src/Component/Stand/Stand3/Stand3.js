import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand3() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 3 | BILQIS</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/bilqis_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 3 | BILQIS</p>
            <h2>NASI PENYETAN</h2>
            <p>Rp.12000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/bilqis_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 3 | BILQIS</p>
            <h2>NASI PECEL</h2>
            <p>Rp.10000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/bilqis_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 3 | BILQIS</p>
            <h2>SAYUR LODEH</h2>
            <p>Rp.12000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/bilqis_menu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 3 | BILQIS</p>
            <h2>GORENGAN</h2>
            <p>Rp.1500</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand3;