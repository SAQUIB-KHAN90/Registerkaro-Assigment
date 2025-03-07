import React, { useState } from "react";
import "./NewsletterSignup.css";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for subscribing, ${email}!`);
    setEmail("");
  };

  return (
    <section className="newsletter">
      <h4>1% OF THE INDUSTRY</h4>
      <h2>Welcome to your new digital reality. Now.</h2>

      <form className="newsletter-form" onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter Your Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Submit</button>
      </form>

      <div className="newsletter-features">
        <span>✔ Instant results</span>
        <span>✔ User-friendly interface</span>
        <span>✔ Personalized customization</span>
      </div>
    </section>
  );
};

export default NewsletterSignup;
