import React from "react";
import "./HappyClients.css"; // Import CSS
import Back from "../../assets/back.png";
const HappyClients = () => {
  return (
    <section className="happy-clients">
      <h2 className="section-title">Our Happy Clients</h2>
      <p className="section-description">
        Professionally cultivate one-to-one customer service with robust ideas.
        Dynamically innovate resource-leveling customer service.
      </p>

      <div className="clients-image-container">
        <img src={Back} alt="Our Happy Clients" />
      </div>

      <button className="show-more-btn">Show more →</button>
    </section>
  );
};

export default HappyClients;
