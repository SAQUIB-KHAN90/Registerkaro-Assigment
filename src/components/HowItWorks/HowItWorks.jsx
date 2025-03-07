import React from "react";
import "./HowItWorks.css";
import { FaFileAlt, FaCreditCard, FaUserTie, FaEnvelope } from "react-icons/fa"; // Import icons

const steps = [
  { id: 1, icon: <FaFileAlt />, text: "Fill up Application Form", bgColor: "#f65a5a" },
  { id: 2, icon: <FaCreditCard />, text: "Make Online Payment", bgColor: "#2ecc71" },
  { id: 3, icon: <FaUserTie />, text: "Executive will Process Application", bgColor: "#f39c12" },
  { id: 4, icon: <FaEnvelope />, text: "Get Confirm Mail", bgColor: "#7f8c8d" },
];

const HowItWorks = () => {
  return (
    <section className="how-it-works">
      <div className="steps-container">
        {steps.map((step) => (
          <div key={step.id} className="step">
            <div className="icon" style={{ backgroundColor: step.bgColor }}>
              {step.icon}
            </div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default HowItWorks;
