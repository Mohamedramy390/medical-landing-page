
import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3 className="footer-column-title">MedCare</h3>
            <p className="footer-text">
              Providing high-quality medical care<br />for you and your family.
            </p>
          </div>

          <div>
            <h3 className="footer-column-title">Quick Links</h3>
            <a href="#services" className="footer-link">Services</a>
            <a href="#about" className="footer-link">About Us</a>
            <a href="#booking" className="footer-link">Book Appointment</a>
          </div>

          <div>
            <h3 className="footer-column-title">Contact</h3>
            <p className="footer-link">123 Medical Center Dr</p>
            <p className="footer-link">New York, NY 10001</p>
            <p className="footer-link">+1 (555) 123-4567</p>
          </div>
        </div>

        <div className="footer-copyright">
          © 2024 MedCare Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;

