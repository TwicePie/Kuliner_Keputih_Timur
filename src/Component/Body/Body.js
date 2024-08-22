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
import Stand9 from '../Stand/Stand9/Stand9';
import Stand10 from '../Stand/Stand10/Stand10';
import Stand11 from '../Stand/Stand11/Stand11';
import Stand12 from '../Stand/Stand12/Stand12';
import Stand13 from '../Stand/Stand13/Stand13';
import Stand14 from '../Stand/Stand14/Stand14';
import Stand15 from '../Stand/Stand15/Stand15';
import Stand16 from '../Stand/Stand16/Stand16';
import Stand17 from '../Stand/Stand17/Stand17';
import Stand18 from '../Stand/Stand18/Stand18';
import Stand19 from '../Stand/Stand19/Stand19';
import Stand20 from '../Stand/Stand20/Stand20';

import AboutUs from '../About/AboutUs';

function Body() {
  const [activeTenant, setActiveTenant] = useState('tenant1');
  const tenant = useRef(null);
  const about = useRef(null);
  const midword = useRef(null);

  useEffect(() => {
    if (tenant.current) {
      console.log("Tenant section is ready");
    }
  }, []);

  const scrollToElement = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const showTenant = (tenant) => {
    setActiveTenant(tenant);
    scrollToElement(midword); 
  };

  return (
    <div className="content">
      <div className="welcome">
        <p className="selamat">Selamat Datang di</p>
        <p className="pujas">PUJASERA KKT</p>
        <p className="menikmati">selamat menikmati !</p>
        <button className="Menu-but" onClick={() => scrollToElement(tenant)}>Our Tenant</button>
        <button className="Menu-but" onClick={() => scrollToElement(about)}>About Us</button>
      </div>

      <div ref={about}>
        <AboutUs />
      </div>

      <div className='upword'>
        Our Tenant
      </div>

      <div ref={tenant} className="card-container">
        <button className="card" onClick={() => showTenant('tenant1')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/WarkopKaka.jpg`} alt="Tenant 1" />
          <p>WARKOP KAKA</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant2')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/DivaJuice.jpg`} alt="Tenant 2" />
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
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/MrPSteak.jpg`} alt="Tenant 6" />
          <p>MR P.STEAK</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Sate.jpg`} alt="Tenant 8" />
          <p>SATE AYAM</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/buMar.jpg`} alt="Tenant 8" />
          <p>BU MAR</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Mamaku.jpg`} alt="Tenant 8" />
          <p>DEPOT MAMAKU</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Seblak.jpg`} alt="Tenant 8" />
          <p>SEBLAK PRASMANAN</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Smoothies.jpg`} alt="Tenant 8" />
          <p>BUAH SMOOTHIES</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/BaksoBalungan.jpg`} alt="Tenant 8" />
          <p>BAKSO BALUNGAN</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Pangsit.jpg`} alt="Tenant 8" />
          <p>PANGSIT MIE JAKARTA</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/BuZaenab.jpg`} alt="Tenant 8" />
          <p>BU ZAENAB</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/DapoerMamaqu.jpg`} alt="Tenant 8" />
          <p>DAPOER MAMAQU</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/LontongKikil.jpg`} alt="Tenant 8" />
          <p>LONTONG KIKIL</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/BaksoDuaPutra.jpg`} alt="Tenant 8" />
          <p>BAKSO DUA PUTRA</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/Idola.jpg`} alt="Tenant 8" />
          <p>IDOLA</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/PenyetanUduk.jpg`} alt="Tenant 8" />
          <p>PENYETAN NASI</p>
        </button>
        <button className="card" onClick={() => showTenant('tenant8')}>
          <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/MartabakRameo.jpg`} alt="Tenant 8" />
          <p>MARTABAK TERBUL</p>
        </button>
      </div>

      <div ref={midword} className='midword'>
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
          SATE AYAM
        </button>
        <button className={`menu-button ${activeTenant === 'tenant8' ? 'active' : ''}`} onClick={() => showTenant('tenant8')}>
          BU MAR
        </button>
        <button className={`menu-button ${activeTenant === 'tenant9' ? 'active' : ''}`} onClick={() => showTenant('tenant9')}>
          DEPOT MAMAKU
        </button>
        <button className={`menu-button ${activeTenant === 'tenant10' ? 'active' : ''}`} onClick={() => showTenant('tenant10')}>
          SEBLAK PRASMANAN
        </button>
        <button className={`menu-button ${activeTenant === 'tenant11' ? 'active' : ''}`} onClick={() => showTenant('tenant11')}>
          BUAH SMOOTHIES
        </button>
        <button className={`menu-button ${activeTenant === 'tenant12' ? 'active' : ''}`} onClick={() => showTenant('tenant12')}>
          BAKSO BALUNGAN
        </button>
        <button className={`menu-button ${activeTenant === 'tenant13' ? 'active' : ''}`} onClick={() => showTenant('tenant13')}>
          PANFSIT MIE
        </button>
        <button className={`menu-button ${activeTenant === 'tenant14' ? 'active' : ''}`} onClick={() => showTenant('tenant14')}>
          BU ZAENAB
        </button>
        <button className={`menu-button ${activeTenant === 'tenant15' ? 'active' : ''}`} onClick={() => showTenant('tenant15')}>
          DAPOER MAMAQU
        </button>
        <button className={`menu-button ${activeTenant === 'tenant16' ? 'active' : ''}`} onClick={() => showTenant('tenant16')}>
          LONTONG KIKIL
        </button>
        <button className={`menu-button ${activeTenant === 'tenant17' ? 'active' : ''}`} onClick={() => showTenant('tenant17')}>
          BAKSO DUA PUTRA
        </button>
        <button className={`menu-button ${activeTenant === 'tenant18' ? 'active' : ''}`} onClick={() => showTenant('tenant18')}>
          IDOLA
        </button>
        <button className={`menu-button ${activeTenant === 'tenant19' ? 'active' : ''}`} onClick={() => showTenant('tenant19')}>
          PENYETAN NASI
        </button>
        <button className={`menu-button ${activeTenant === 'tenant20' ? 'active' : ''}`} onClick={() => showTenant('tenant20')}>
          MARTABAK RAMEO
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
        {activeTenant === 'tenant9' && <Stand9 />}
        {activeTenant === 'tenant10' && <Stand10 />}
        {activeTenant === 'tenant11' && <Stand11 />}
        {activeTenant === 'tenant12' && <Stand12 />}
        {activeTenant === 'tenant13' && <Stand13 />}
        {activeTenant === 'tenant14' && <Stand14 />}
        {activeTenant === 'tenant15' && <Stand15 />}
        {activeTenant === 'tenant16' && <Stand16 />}
        {activeTenant === 'tenant17' && <Stand17 />}
        {activeTenant === 'tenant18' && <Stand18 />}
        {activeTenant === 'tenant19' && <Stand19 />}
        {activeTenant === 'tenant20' && <Stand20 />}
      </div>
    </div>
  );
}

export default Body;
