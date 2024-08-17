import React, { useState, useRef, useEffect } from 'react';
import './Body.css';
import Stand1 from '../Stand/Stand1/Stand1';
import Stand2 from '../Stand/Stand2/Stand2';
import Stand3 from '../Stand/Stand3/Stand3';
import Stand4 from '../Stand/Stand4/Stand4';
import Stand5 from '../Stand/Stand5/Stand5';
import Stand6 from '../Stand/Stand6/Stand6';
import Stand7 from '../Stand/Stand7/Stand7';
import Stand8 from '../Stand/Stand8/Stand8';
import AboutUs from '../About/AboutUs';

function Body() {
  const [activeTenant, setActiveTenant] = useState('tenant1');
  const tenant = useRef(null);
  const about = useRef(null);

  useEffect(() => {
    // Just to check if ref is correctly assigned
    if (tenant.current) {
      console.log("Tenant section is ready");
    }
  }, []);

  const scrollToTenant = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showTenant = (tenant) => {
    setActiveTenant(tenant);
  };

  return (
    <div className="content">
      <div className="welcome">
        <p className="selamat">Selamat Datang di</p>
        <p className="pujas">PUJASERA KKT</p>
        <p className="menikmati">selamat menikmati !</p>
        <button className="Menu-but" onClick={() => scrollToTenant(tenant)}>Our Tenant</button>
        <button className="Menu-but" onClick={() => scrollToTenant(about)}>About Us</button>
      </div>

      <div ref={about}>
        <AboutUs />
      </div>

      <div ref={tenant} className="card-container">
        <button className="card" onClick={() => showTenant('tenant1')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Bakso.jpg`} alt="Tenant 1" />
          <p>WARKOP KAKA</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant2')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/diva_juice.jpg`} alt="Tenant 2" />
          <p>DIVA JUICE</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant3')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/bilqis.jpg`} alt="Tenant 3" />
          <p>BILQIS</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant4')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/katsu.jpg`} alt="Tenant 4" />
          <p>KATSU</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant5')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Nasgor.jpg`} alt="Tenant 5" />
          <p>NASI GORENG</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant6')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/mr.psteak.jpg`} alt="Tenant 6" />
          <p>MR P.STEAK</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant7')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Penyetan.jpg`} alt="Tenant 7" />
          <p>PENYETAN NASI</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/sate.jpg`} alt="Tenant 8" />
          <p>SATE AYAM</p>
        </button>
      </div>

      <div className='midword'>
        <h1>Our Menu From Tenant</h1>
      </div>
      <div className="tenant-menu">
        <button className={`menu-button ${activeTenant === 'tenant1' ? 'active' : ''}`} onClick={() => showTenant('tenant1')}>
          WARKOP KAKA
        </button>
        <button className={`menu-button ${activeTenant === 'tenant2' ? 'active' : ''}`} onClick={() => showTenant('tenant2')}>
          DIVA JUICE
        </button>
        <button className={`menu-button ${activeTenant === 'tenant3' ? 'active' : ''}`} onClick={() => showTenant('tenant3')}>
          BILQIS
        </button>
        <button className={`menu-button ${activeTenant === 'tenant4' ? 'active' : ''}`} onClick={() => showTenant('tenant4')}>
          KATSU
        </button>
        <button className={`menu-button ${activeTenant === 'tenant5' ? 'active' : ''}`} onClick={() => showTenant('tenant5')}>
          NASI GORENG
        </button>
        <button className={`menu-button ${activeTenant === 'tenant6' ? 'active' : ''}`} onClick={() => showTenant('tenant6')}>
          MR P.STEAK
        </button>
        <button className={`menu-button ${activeTenant === 'tenant7' ? 'active' : ''}`} onClick={() => showTenant('tenant7')}>
          PENYETAN NASI
        </button>
        <button className={`menu-button ${activeTenant === 'tenant8' ? 'active' : ''}`} onClick={() => showTenant('tenant8')}>
          SATE AYAM
        </button>
      </div>

      <div className="tenant-content">
        {activeTenant === 'tenant1' && <Stand1 />}
        {activeTenant === 'tenant2' && <Stand2 />}
        {activeTenant === 'tenant3' && <Stand3 />}
        {activeTenant === 'tenant4' && <Stand4 />}
        {activeTenant === 'tenant5' && <Stand5 />}
        {activeTenant === 'tenant6' && <Stand6 />}
        {activeTenant === 'tenant7' && <Stand7 />}
        {activeTenant === 'tenant8' && <Stand8 />}
      </div>
    </div>
  );
}

export default Body;
