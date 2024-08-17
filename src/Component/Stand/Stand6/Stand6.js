import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand6() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 6 | MR P. STEAK</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/mr.psteak.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 6 | MR P. STEAK</p>
            <h2>TERDELOIN STEAK</h2>
            <p>Rp.40.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/mr.psteak.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 6 | MR P. STEAK</p>
            <h2>SIRLOIN STEAK</h2>
            <p>Rp.35.000</p>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/mr.psteak.jpg`} alt="Stand 1" />
          <div className="kalimat">
            <p>Tenant 6 | MR P. STEAK</p>
            <h2>CHICKEN STEAK</h2>
            <p>Rp.35.000</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand6;