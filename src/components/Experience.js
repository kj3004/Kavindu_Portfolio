import React from "react";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="experience" className="experience-section">
      <h2>Experience</h2>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <img
          src="/project1.jpg"
          alt="Kavindu Tourism Website"
          className="project-image"
        />
        <h3>Kavindu Tourism Website</h3>
        <p>Developed a tourism website for seamless bookings and inquiries.</p>
        <p>Technologies: React, JavaScript, Node.js, MongoDB</p>
      </motion.div>
      <motion.div
        className="card"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
      >
        <img
          src="/project2.jpg"
          alt="Reviewer - Book Review Platform"
          className="project-image"
        />
        <h3>Reviewer - Book Review Platform</h3>
        <p>
          Collaborated on a platform for book enthusiasts to review and explore
          books.
        </p>
        <p>Technologies: Python, React, JavaScript</p>
      </motion.div>
    </section>
  );
};

export default Experience;
