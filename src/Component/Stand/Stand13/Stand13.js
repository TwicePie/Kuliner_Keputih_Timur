import React from 'react';
import Header from '../../Header/Header';
import '../Stand1/Stand1.css';  // Import CSS untuk Stand1

function Stand13() {
  return (
    <div>
      <Header />
      <h3 className='nama'>Tenant 13 | PANGSIT MIE JAKARTA</h3>
      <div className="konten">
        <div className="kotak">
          <img src={`${process.env.PUBLIC_URL}/Gambar/Makanan/diva_menu.jpg`} alt="Stand 1" className='image_tenant'/>
          <div className="kalimat">
            <p>Tenant 13 | PANGSIT MIE JAKARTA</p>
            <h2>PANGSIT MIE JAKARTA</h2>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stand13;