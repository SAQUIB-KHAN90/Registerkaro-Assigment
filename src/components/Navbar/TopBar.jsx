import React from "react";
import "./TopBar.css";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";

const TopBar = () => {
  return (
    <div className="top-bar">
      <div className="contact-info">
        ✉ <a href="mailto:info@registerkaro.in">info@registerkaro.in</a>
        📞 <a href="tel:+918447746183">+91 8447746183</a>
      </div>
      <div className="social-icons">
        <a href="#">
          <FaFacebookF />
        </a>
        <a href="#">
          <FaTwitter />
        </a>
        <a href="#">
          <FaInstagram />
        </a>
        <a href="#">
          <FaPinterest />
        </a>
      </div>
    </div>
  );
};

export default TopBar;
