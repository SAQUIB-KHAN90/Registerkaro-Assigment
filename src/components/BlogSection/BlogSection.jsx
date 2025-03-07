import React from "react";
import "./BlogSection.css";

// Import images for blogs
import blog1 from "../../assets/Image1.png";
import blog2 from "../../assets/Image2.png";
import blog3 from "../../assets/Image3.png";
import blog4 from "../../assets/Image4.png";
import blog5 from "../../assets/Image5.png";
import blog6 from "../../assets/Image6.png";

const blogs = [
  {
    id: 1,
    image: blog1,
    author: "Prabhash Mishra",
    date: "1 Jan 2023",
    title: "Small Business & Startup",
    description:
      "Like to know the secrets of transforming a 2-14 team into a 3x Super Bowl winning Dynasty?",
    tags: ["Tax & Audit", "Management"],
  },
  {
    id: 2,
    image: blog2,
    author: "Mahesh Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Mental models are simple expressions of complex processes or relationships.",
    tags: ["Tax", "Research", "Compliance"],
  },
  {
    id: 3,
    image: blog3,
    author: "Rakhi Verma",
    date: "1 Jan 2023",
    title: "Growing Business Package",
    description:
      "Introduction to Wireframing and its Principles. Learn from the best in the industry.",
    tags: ["Audit", "Money Back"],
  },
  {
    id: 4,
    image: blog4,
    author: "Karan Kumar",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Collaboration can make our teams stronger, and our individual designs better.",
    tags: ["Money", "Management"],
  },
  {
    id: 5,
    image: blog5,
    author: "Richa Singh",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "JavaScript frameworks make development easy with extensive features and functionalities.",
    tags: ["Tax Return", "News", "Audit"],
  },
  {
    id: 6,
    image: blog6,
    author: "Miss Nora",
    date: "1 Jan 2023",
    title: "Scale-Up Company Offer",
    description:
      "Starting a community doesn’t need to be complicated, but how do you get started?",
    tags: ["Private Limited Company", "Customer Success"],
  },
];

const BlogSection = () => {
  return (
    <section className="blog-section">
      <h2 className="section-title">Explore Our Blogs</h2>
      <p className="section-description">Accelerate Digital Transformation</p>

      <div className="blog-grid">
        {blogs.map((blog) => (
          <div key={blog.id} className="blog-card">
            <img src={blog.image} alt={blog.title} className="blog-image" />
            <div className="blog-content">
              <p className="blog-author">
                {blog.author} • {blog.date}
              </p>
              <h3 className="blog-title">{blog.title} ↗</h3>
              <p className="blog-description">{blog.description}</p>
              <div className="blog-tags">
                {blog.tags.map((tag, index) => (
                  <span key={index} className="blog-tag">
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      <button className="show-more-btn">Show more blogs →</button>
    </section>
  );
};

export default BlogSection;
