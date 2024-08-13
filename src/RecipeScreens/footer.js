// src/components/Footer.js
import React from 'react';
import './Footer.css'; // Import CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Contact Us</h4>
          <p>123 HRK St, Foodtown, FL 12345</p>
          <p>Phone: (123) 456-7890</p>
          <p>Email: info@Hrkrestaurant.com</p>
        </div>

        <div className="footer-section">
          <h4>Hours of Operation</h4>
          <p>Monday - Friday: 10 AM - 10 PM</p>
          <p>Saturday: 11 AM - 11 PM</p>
          <p>Sunday: Closed</p>
        </div>

        <div className="footer-section">
          <h4>Follow Us</h4>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook<img src="https://i.postimg.cc/DwbWDQTx/facebook.png" alt="facebook" style={{width: 60}}/>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">YouTube<img src="https://i.postimg.cc/LstJ4Hhf/youtube.png" alt="youtube" style={{width: 60}}></img></a>
         
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">SoundCloud<img src="https://i.postimg.cc/tgQ1H1Rp/soundcloud.png" alt="soundcloud" style={{width: 60}}/></a>
          
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 HRK Restaurant. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
