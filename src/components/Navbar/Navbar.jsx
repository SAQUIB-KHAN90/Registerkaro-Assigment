import React from "react";
import "./Navbar.css";
import Logo from "../../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-left">
        <img src={Logo} alt="RegisterKaro Logo" className="logo" />
      </div>
      <div className="nav-center">
        <a href="/">Home</a>
        <a href="/">Our Services</a>
        <a href="/">Blog</a>
        <a href="/">Contact Us</a>
        <a href="/">About Us</a>
      </div>
      <div className="nav-right">
        <button className="cta-button">Talk An Expert</button>
      </div>
    </nav>
  );
};

export default Navbar;
