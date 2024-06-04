import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useNavigate } from 'react-router-dom';  // Import useNavigate
import '../index.css';

function Page() {
    const navigate = useNavigate();  // Create navigate function

    const handleStartClick = () => {
        setTimeout(() => navigate('/login'), 300);  // Navigate to login after 300ms
    }

    return (
        <div className="home">
            <nav className="navbar">
                <ul className="navbar-links">
                    <li><a href="contact">Contact US</a></li>
                    <li><a href="about">About US</a></li>
                    <li><a href="how-to-login">How to login</a></li>
                    <li><a href="social">Social medias</a></li>
                    <li><a href="login">Login</a></li>
                </ul>
            </nav>
            <div className="home-content">
                <h1>Welcome in Agroam Company</h1>
                <button onClick={handleStartClick}>Let's start</button>
                <CSSTransition
                  timeout={300}
                  classNames="alert"
                  unmountOnExit
                >
                </CSSTransition>
            </div>
        </div>
    );
}

export default Page;


