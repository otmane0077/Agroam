// src/components/HowToLogin.js
import React from 'react';
import '../index.css';

const HowToLogin = () => {
    return (
        <div className="how-to-login-container">
           <nav className="navbar">
        <div className="navbar-logo">
          <img src="/logo.png" alt="Agroam Logo" />
        </div>
        <ul className="navbar-links">
          <li><a href="contact">Contact US</a></li>
          <li><a href="about">About US</a></li>
          <li><a href="how-to-login">How to login</a></li>
          <li><a href="/social">Social medias</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </nav>
            <div className="content">
                <h1>How to Login?</h1>
                <div className="how-to-login-content">
                    <h2>We're here to ensure your seamless transition into our community and to support you every step of the way.</h2>
                    <div className="how-to-login-box">
                        <h2>How to Login?</h2>
                        <p>Once you've started, an email containing your authentication details and password will be sent to you.</p>
                        <p>This is your key to accessing a wealth of resources and insights. Please check your inbox (and spam folder, just in case) for this important information. If you haven't received the email within a reasonable time frame, don't hesitate to contact us.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HowToLogin;
