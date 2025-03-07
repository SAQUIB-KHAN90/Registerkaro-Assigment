import React from "react";
import "./Testimonials.css";
import { FaQuoteLeft, FaStar, FaStarHalfAlt } from "react-icons/fa";

// Import user images
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user1.png";
import user3 from "../../assets/user1.png";

const testimonials = [
  {
    id: 1,
    name: "Chris",
    position: "President and CEO, PrintReach, USA",
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 5,
    image: user1,
  },
  {
    id: 2,
    name: "Jessica",
    position: "Marketing Director, TechCorp, UK",
    text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 4.5,
    image: user2,
  },
  {
    id: 3,
    name: "Michael",
    position: "Founder, Startup X, Canada",
    text: "Quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat aute irure dolor.",
    rating: 4,
    image: user3,
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials">
      <h2 className="section-title">What people say about us</h2>

      <div className="testimonials-container">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-card">
            <div className="testimonial-content">
              <FaQuoteLeft className="quote-icon" />
              <p>{testimonial.text}</p>
              <div className="stars">
                {[...Array(Math.floor(testimonial.rating))].map((_, i) => (
                  <FaStar key={i} className="star" />
                ))}
                {testimonial.rating % 1 !== 0 && (
                  <FaStarHalfAlt className="star" />
                )}
              </div>
            </div>
            <div className="testimonial-user">
              <img src={testimonial.image} alt={testimonial.name} />
              <div>
                <h4>{testimonial.name}</h4>
                <p>{testimonial.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
