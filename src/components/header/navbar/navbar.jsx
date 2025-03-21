import React from "react";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <ul className="nav-list">
        <li className="home">Globe</li>
        <div className="nav-right">
          <li>Services</li>
          <li>Contact</li>
          <li>About</li>
          <li>login</li>
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;
