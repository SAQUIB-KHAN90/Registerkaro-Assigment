import React from "react";
import "./TrustedBy.css"; // Import CSS

// Import company logos from assets folder
import oracle from "../../assets/Oracle.png";
import morpheus from "../../assets/morpheus.png";
import samsung from "../../assets/samsung.png";
import monday from "../../assets/monday.png";
import segment from "../../assets/segment.png";

const TrustedBy = () => {
  return (
    <section className="trusted-by">
      <h2>Trusted By Over 100+ Startups and Freelance Business</h2>
      <div className="logo-container">
        <img src={oracle} alt="Oracle" />
        <img src={morpheus} alt="Morpheus" />
        <img src={morpheus} alt="Morpheus Tech Hiro" />
        <img src={samsung} alt="Samsung" />
        <img src={monday} alt="Monday.com" />
        <img src={segment} alt="Segment" />
      </div>
    </section>
  );
};

export default TrustedBy;
