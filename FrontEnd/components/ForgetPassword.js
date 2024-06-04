import React, { useState } from 'react';
import axios from 'axios';
import '../index.css';

function ForgetPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleForgetPassword = async (e) => {
    e.preventDefault();
    try {
      await axios.post('YOUR_BACKEND_URL/forgot-password', { email });
      setMessage('Password reset link sent to your email');
    } catch (err) {
      setMessage('Error sending password reset link');
    }
  };

  return (
    <div className="forget-password-container">
      <h2>Forget Password</h2>
      <form className="forget-password-form" onSubmit={handleForgetPassword}>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p>{message}</p>}
    </div>
  );
}

export default ForgetPassword;
