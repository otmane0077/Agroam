// src/components/ContactUs.js
import React, { useState } from 'react';
import axios from 'axios';

function ContactUs() {
  const [name, setName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [responseMessage, setResponseMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_BACKEND_URL/contact', { name, phoneNumber, email, message });
      setResponseMessage('Your message has been sent successfully.');
    } catch (err) {
      setResponseMessage('Failed to send the message.');
    }
  };

  return (
    <div className="form-container">
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
        <div className="welcome-message">
          <h1>Get in Touch with Us!</h1>
        </div>
        <div className="form-content">
          <h2>Contact Us</h2>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
            />
            <input
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              placeholder="Phone number"
              required
            />
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              required
            />
            <button type="submit"><i className="fa fa-paper-plane"></i></button>
          </form>
          {responseMessage && <p>{responseMessage}</p>}
        </div>
      </div>
    </div>
  );
}

export default ContactUs;
