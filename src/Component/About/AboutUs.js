import React from "react";
import './AboutUs.css';

function AboutUs() {
    return(
        <div className="Tentang">
            <img src={`${process.env.PUBLIC_URL}/Gambar/Warung/KKT.jpg`} alt="oke" className="imagine"/>
            <div className="tulisan">
                <h1>Tentang Kami</h1>
                <h4>Pujasera Kuliner Keputih Tegal</h4>
                <p>- pusat kuliner di Surabaya yang menawarkan beragam pilihan makanan dan minuman dengan cita rasa autentik</p>
                <p>- Terletak strategis di daerah Keputih, kami menghadirkan berbagai hidangan dari nusantara hingga makanan modern dalam satu tempat yang nyaman.</p>
                <p>- Kami berkomitmen untuk memberikan pengalaman kuliner terbaik bagi Anda sambil mendukung pelaku UMKM lokal.</p>
                <h2> Nikmati suasana santai dan pelayanan ramah khas Surabaya di Pujasera Keputih.</h2>
            </div>
        </div>
    );
}

export default AboutUs;