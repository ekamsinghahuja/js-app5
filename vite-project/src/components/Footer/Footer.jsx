import React from 'react';
import './fxx.css'; // Import your CSS file for styling

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <p>&copy; 2024 Your Company</p>
                <nav>
                    <ul className="footer-nav">
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </footer>
    );
};

export default Footer;