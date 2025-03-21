import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-about">
          <h2>About Us</h2>
          <p>
            We are committed to providing the best services and creating
            solutions that make a difference.
          </p>
        </div>
        <div className="footer-social">
          <h2>Follow Us</h2>
          <div className="social-links">
            <a
              href="https://www.facebook.com/globeph"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-facebook"></i>
            </a>
            <a
              href="https://x.com/enjoyGLOBE"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fab fa-x-twitter"></i>
            </a>

            <a
              href="https://www.instagram.com/enjoyglobe"
              className="social-icon"
            >
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
      </div>
      <p className="footer-bottom">
        &copy; 2025 Globe Telecom INC. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
