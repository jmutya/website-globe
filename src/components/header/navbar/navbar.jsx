import React from "react";
import "./navbar.css";
import logo from "/src/assets/globe-logo-name.png";
const Navbar = () => {
  return (
    <div className="navbar">
  <div className="logo-container">
    <img src={logo} alt="Logo" />
  </div>
  <ul className="nav-links">
    <li><a href="#">Solutions</a></li>
    <li><a href="#">Pricing</a></li>
    <li><a href="#">Contact Us</a></li>
  </ul>
  <button className="signup-btn">Log in →</button>
</div>

  );
};

export default Navbar;
