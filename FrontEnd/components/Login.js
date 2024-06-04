// src/components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';


function Login({ setToken }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('YOUR_BACKEND_URL/login', { email, password });
      const { token } = response.data;
      localStorage.setItem('token', token);
      setToken(token);
    } catch (err) {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="login-container">
      <nav className="navbar">

        <ul className="navbar-links">
          <li><a href="contact">Contact US</a></li>
          <li><a href="about">About US</a></li>
          <li><a href="how-to-login">How to login</a></li>
          <li><a href="social">Social medias</a></li>
          <li><a href="login">Login</a></li>
        </ul>
      </nav>
      <div className="content">
        <div className="welcome-message-login">
          <h1>Welcome to your </h1>
          <h1>journey with us!</h1>
        </div>
        <div className="login-form">
          <h2>Login</h2>
          <form onSubmit={handleLogin}>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
            <button type="submit"><i className="fa fa-sign-in"></i></button>
          </form>
          {error && <p>{error}</p>}
        </div>
      </div>
    </div>
  );
}

export default Login;
