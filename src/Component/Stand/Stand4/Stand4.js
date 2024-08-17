import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand4() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 4 | KATSU</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/katsu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 4 | KATSU</p>
            <h2>STEAK AYAM</h2>
            <p>Rp.20.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/katsu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 4 | KATSU</p>
            <h2>AYAM KATSU</h2>
            <p>Rp.20.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/katsu.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 4 | KATSU</p>
            <h2>AYAM GEPREK</h2>
            <p>Rp.15.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand4;