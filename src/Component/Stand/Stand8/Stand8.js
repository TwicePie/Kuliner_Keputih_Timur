import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand8() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 8 | SATE AYAM</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/sate.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 8 | SATE AYAM</p>
            <h2>SATE KAMBING</h2>
            <p>10 TUSUK / Rp.50.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/sate.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 8 | SATE AYAM</p>
            <h2>SATE DAGING</h2>
            <p>10 TUSUK / Rp.30.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/sate.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 8 | SATE AYAM</p>
            <h2>SATE AYAM</h2>
            <p>10 TUSUK / Rp.15.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/sate.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 8 | SATE AYAM</p>
            <h2>SATE KOMOOH</h2>
            <p>Rp.8.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand8;