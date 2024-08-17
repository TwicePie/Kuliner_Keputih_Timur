// Landing.js
import React from 'react';
import Header from '../Component/Header/Header';
import Body from '../Component/Body/Body';
import Footer from '../Component/Footer/Footer';
import './Landing.css';

function Landing() {
  return (
    <div className="landing-container">
      <Header />
      <div className="content">
        <Body />
      </div>
      <Footer />
    </div>
  );
}

export default Landing;
