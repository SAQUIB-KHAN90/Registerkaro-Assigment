import React from "react";
import "./Hero.css";
import Hero from "../../assets/Hero.png";

const HeroSection = () => {
  return (
    <section className="hero">
      <div className="hero-content">
        <p className="rating">⭐ Google Rating ⭐⭐⭐⭐⭐</p>
        <h1>Your trusted partner for compliance business needs</h1>
        <p className="sub-text">
          An online business compliance platform that helps entrepreneurs and
          other individuals with various <strong>registrations</strong>,{" "}
          <strong>tax filings</strong>, and other <strong>legal matters</strong>
          .
        </p>
        <div className="stats">
          <span>📊 4.5+ Customer Rating</span>
          <span>👥 20,000+ Clients</span>
          <span>💰 99.8% Financial Stability</span>
        </div>
        <div className="buttons">
          <button className="cta">Talk An Expert</button>
          <button className="secondary">▶ See how it works</button>
        </div>
      </div>
      <div className="hero-image">
        <img src={Hero} alt="Hero Image" />
      </div>
    </section>
  );
};

export default HeroSection;
