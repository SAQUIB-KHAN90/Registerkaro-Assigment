import React from "react";
import "./WhyChooseUs.css"; // Import styles
import {
  FaShieldAlt,
  FaMoneyCheckAlt,
  FaSmile,
  FaUserTie,
} from "react-icons/fa"; // Import icons

const benefits = [
  {
    id: 1,
    icon: <FaShieldAlt />,
    title: "Confidential & Safe",
    description: "All your private information is safe with us.",
  },
  {
    id: 2,
    icon: <FaMoneyCheckAlt />,
    title: "No Hidden Fee",
    description:
      "Everything is put before you with no hidden charges or conditions.",
  },
  {
    id: 3,
    icon: <FaSmile />,
    title: "Guaranteed Satisfaction",
    description:
      "We ensure that you stay 100% satisfied with our offered services.",
  },
  {
    id: 4,
    icon: <FaUserTie />,
    title: "Expert CA/CS Assistance",
    description: "Prompt support from our in-house expert professionals.",
  },
];

const WhyChooseUs = () => {
  return (
    <section className="why-choose-us">
      <h3 className="section-subtitle">WHY REGISTERKARO.IN</h3>
      <h2 className="section-title">
        Why Choose <span className="highlight">Register Karo</span>
      </h2>
      <p className="section-description">
        It is with consistent services and results that build trust with the
        people and that in turn helps us to serve the business better.
      </p>

      <div className="benefits-grid">
        {benefits.map((benefit) => (
          <div key={benefit.id} className="benefit-card">
            <div className="icon">{benefit.icon}</div>
            <h3>{benefit.title}</h3>
            <p>{benefit.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
