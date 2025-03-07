import React from "react";
import "./Services.css"; // Import CSS
import servicesData from "../../data/servicesData"; // Import service list

const Services = () => {
  return (
    <section className="services">
      <h3 className="section-subtitle">WELCOME TO REGISTERKARO.IN</h3>
      <h2 className="section-title">Explore Our Services</h2>

      <div className="services-grid">
        {servicesData.map((service) => (
          <div key={service.id} className="service-card">
            <img
              src={service.icon}
              alt={service.title}
              className="service-icon"
            />
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            <a href="#" className="learn-more">
              Learn more →
            </a>
          </div>
        ))}
      </div>

      <div className="center">
        <button className="see-all-btn">See All Services</button>
      </div>
    </section>
  );
};

export default Services;
