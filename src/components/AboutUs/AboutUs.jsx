import React from "react";
import "./AboutUs.css";
import aboutImage from "../../assets/Team.png";

const AboutUs = () => {
  return (
    <section className="about-us">
      <div className="about-content">
        <h3 className="section-subtitle">WELCOME TO REGISTERKARO.IN</h3>
        <h2 className="section-title">
          About <span className="highlight">Register Karo</span>
        </h2>
        <p>
          We have been using Intelegencia as our DevOps vendor for our field
          service applications over the last couple of years and I’m extremely
          pleased with their performance, ability to execute, and willingness to
          adapt in our ever-changing environment.
        </p>
        <p>
          Perry is an outstanding leader who is fanatical about customer
          satisfaction. He has built a solid team which has consistently
          delivered on projects thereby exceeding everyone’s expectations.
        </p>
        <button className="learn-more-btn">Learn More →</button>
      </div>
      <div className="about-image">
        <img src={aboutImage} alt="Our Team" />
      </div>
    </section>
  );
};

export default AboutUs;
