import React, { useState, useEffect } from 'react';
import { jwtDecode } from 'jwt-decode';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import ForgetPassword from './components/ForgetPassword';
import Page from './components/Page';
import Admin from './components/Admin';
import ContactUs from './components/ContactUs'; // Import correct du composant ContactUs
import AboutUs from './components/AboutUs'; 
import './index.css';
import SocialMedia from './components/SocialMedia';
import HowToLogin from './components/HowToLogin';

function App() {
  const [token, setToken] = useState(localStorage.getItem('token'));

  useEffect(() => {
    if (token) {
      jwtDecode(token); // Juste décoder sans utiliser user
    }
  }, [token]);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Page />} /> {/* Route pour le composant Page */}
          <Route path="/login" element={<Login setToken={setToken} />} /> {/* Route pour le composant Login */}
          <Route path="/forget-password" element={<ForgetPassword />} /> {/* Route pour le composant ForgetPassword */}
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<ContactUs />} /> {/* Route pour le composant ContactUs */}
          <Route path="/about" element={<AboutUs />} /> {/* Add the AboutUs route */}
          <Route path="/social" element={<SocialMedia />} /> {/* Add the AboutUs route */}
          <Route path="/how-to-login" element={<HowToLogin />} /> {/* Add the AboutUs route */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
