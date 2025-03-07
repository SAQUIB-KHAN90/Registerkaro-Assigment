import React from "react";
import "./Statistics.css";

const statsData = [
  { number: "1M+", label: "CUSTOMERS" },
  { number: "12+", label: "YEARS OF EXCELLENCE" },
  { number: "41+", label: "R&D ENGINEERS" },
  { number: "78+", label: "COUNTRIES" },
  { number: "3287+", label: "PARTNERS" },
  { number: "41+", label: "AWARDS RECEIVED" },
];

const Statistics = () => {
  return (
    <section className="statistics">
      <h3 className="stats-title">Why Register Karo</h3>
      <h2 className="stats-heading">Some Numbers are Important</h2>

      <div className="stats-container">
        {statsData.map((stat, index) => (
          <div key={index} className="stat-box">
            <h3>{stat.number}</h3>
            <p>{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Statistics;
