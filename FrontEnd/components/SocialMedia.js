import React from 'react';
import '../index.css';

const SocialMedia = () => {
    return (
        <div className="socialmedia-container">
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
            <main>
                <div className="socialmedia">
                    <h3>"Join us on our social media journey and become part of a community dedicated to revolutionizing agriculture with technology! Follow us for the latest insights, innovations, and behind-the-scenes looks at how we're using advanced solutions to create sustainable and efficient farming practices. Connect with experts, share your thoughts, and stay up-to-date with the latest trends in agricultural technology. Let's grow together and shape the future of farming. Follow us now and be part of the change!"</h3>
                    <div className="social-icons">
                        <a href="https://www.linkedin.com"><img src='/images/linkedin.png' alt='LinkedIn' /></a>
                        <a href="https://www.youtube.com"><img src='/images/youtube.png' alt='YouTube' /></a>
                        <a href="https://www.facebook.com"><img src='/images/facebook.png' alt='Facebook' /></a>
                        <a href="https://www.instagram.com"><img src='/images/instagram.png' alt='Instagram' /></a>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default SocialMedia;
