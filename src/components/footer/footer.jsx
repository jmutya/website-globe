import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            We are committed to providing the best services and creating solutions that make a difference.
          </p>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a href="#" className="social-icon">🔵</a>
            <a href="#" className="social-icon">🐦</a>
            <a href="#" className="social-icon">📸</a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">&copy; 2025 Globe Telecom INC. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
