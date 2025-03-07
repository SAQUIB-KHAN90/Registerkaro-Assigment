import React from "react";
import "./Footer.css";
import { FaFacebookF, FaGoogle, FaApple, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section */}
        <div className="footer-left">
          <p>
            Design outstanding interfaces with advanced Figma features in a
            matter of minutes.
          </p>
          <div className="social-icons">
            <FaFacebookF />
            <FaGoogle />
            <FaApple />
            <FaInstagram />
          </div>
        </div>

        {/* Middle Section - Quick Links */}
        <div className="footer-links">
          <div className="footer-column">
            <h4>Start A Business</h4>
            <ul>
              <li>Features</li>
              <li>Solutions</li>
              <li>Integrations</li>
              <li>Enterprise</li>
              <li>Solutions</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Government Registration</h4>
            <ul>
              <li>Partners</li>
              <li>Community</li>
              <li>Developers</li>
              <li>App</li>
              <li>Blog</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>Compliance & Tax</h4>
            <ul>
              <li>Channels</li>
              <li>Scale</li>
              <li>Watch the Demo</li>
              <li>Our Competition</li>
            </ul>
          </div>

          <div className="footer-column">
            <h4>BIS & CDSCO</h4>
            <ul>
              <li>About Us</li>
              <li>News</li>
              <li>Leadership</li>
              <li>Media Kit</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="footer-bottom">
        <p>© 2024 Registerkaro. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
