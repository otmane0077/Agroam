// src/components/AboutUs.js
import React from 'react';
import '../index.css';

const AboutUs = () => {
    return (
        <div className="aboutus-container">
       <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Agroam Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="contact">Contact US</a></li>
          <li><a href="about">About US</a></li>
          <li><a href="how-to-login">How to login</a></li>
          <li><a href="social">Social medias</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </nav>
            <div className="content">
                <h1>About Us</h1>
                <p>AGROAM offers solutions to preserve resources, enhance product traceability, and adapt to irregular seasons...</p>
            </div>
        </div>
    );
}

export default AboutUs;
