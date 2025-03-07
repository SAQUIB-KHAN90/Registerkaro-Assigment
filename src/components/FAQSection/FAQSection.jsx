import React, { useState } from "react";
import "./FAQSection.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const faqData = [
  {
    id: 1,
    question: "Can I recover deleted files from desktop with this software?",
    answer:
      "Yes, this software allows you to recover deleted files efficiently using advanced algorithms.",
  },
  {
    id: 2,
    question: "Is this software compatible with Windows and Mac?",
    answer:
      "Absolutely! Our software supports both Windows and Mac operating systems seamlessly.",
  },
  {
    id: 3,
    question: "Do I need an internet connection to use this software?",
    answer:
      "No, you can use the software offline, but some features may require an internet connection.",
  },
  {
    id: 4,
    question: "Is customer support available 24/7?",
    answer:
      "Yes, we provide 24/7 customer support to assist you with any issues.",
  },
  {
    id: 5,
    question: "What are the system requirements for this software?",
    answer:
      "A minimum of 4GB RAM and 100MB storage is required for optimal performance.",
  },
];

const FAQ = () => {
  const [openFAQ, setOpenFAQ] = useState(null);

  const toggleFAQ = (id) => {
    setOpenFAQ(openFAQ === id ? null : id);
  };

  return (
    <section className="faq-section">
      <h2 className="section-title">Frequent Ask Questions</h2>
      <div className="faq-container">
        {faqData.map((faq) => (
          <div
            key={faq.id}
            className={`faq-item ${openFAQ === faq.id ? "open" : ""}`}
          >
            <div className="faq-question" onClick={() => toggleFAQ(faq.id)}>
              <p>{faq.question}</p>
              {openFAQ === faq.id ? <FaChevronUp /> : <FaChevronDown />}
            </div>
            {openFAQ === faq.id && (
              <div className="faq-answer">{faq.answer}</div>
            )}
          </div>
        ))}
      </div>
      <button className="show-more-btn">Show more →</button>
    </section>
  );
};

export default FAQ;
