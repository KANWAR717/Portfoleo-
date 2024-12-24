// Footer.js
import React from 'react';
import './Footer.css'; // Import the CSS file for styling

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>&copy; 2024 Your Name. All Rights Reserved.</p>
        <div className="social-links">
          <a href="https://github.com/KANWAR717/Portfoleo" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src='https://cdn-icons-png.flaticon.com/128/10090/10090288.png'/>
          </a>
          <a href="https://www.instagram.com/_kanwar_0811?igsh=MWNwcGZqbnZ2czJ1cA==" target="_blank" rel="noopener noreferrer" className="social-link">
            <img src='https://cdn-icons-png.flaticon.com/128/15707/15707749.png'/>
          </a>
          <a href="" className="social-link">
            <img src='https://cdn-icons-png.flaticon.com/128/10090/10090300.png'/>
          </a>
          <a href="https://wa.me/qr/ABRFTIMAMF7SK1" className="social-link">
            <img src='https://cdn-icons-png.flaticon.com/128/10090/10090310.png'/>
          </a>
          <a href="https://www.facebook.com/tarsem.kanwar" className="social-link">
          <img src='https://cdn-icons-png.flaticon.com/128/10090/10090290.png'/>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
