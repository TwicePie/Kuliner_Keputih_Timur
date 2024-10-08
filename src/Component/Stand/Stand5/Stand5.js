import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand5() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 5 | NASI GORENG</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/nasgor.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 5 | NASI GORENG</p>
            <h2>NASI GORENG</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/nasgor.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 5 | NASI GORENG</p>
            <h2>NASI GORENG MAWUT</h2>
          </div>
        </div>
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/nasgor.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 5 | NASI GORENG</p>
            <h2>NASI KRENGSENGAN</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand5;