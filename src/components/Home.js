import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section id="home" className="home-section">
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="home-content"
      >
        <img
          src="/profile.jpg"
          alt="Kavindu Fernando"
          className="profile-pic"
        />
        <h1>Kavindu Fernando</h1>
        <p>Computer Science Undergraduate | Full-Stack Developer</p>
        <p>Passionate about building scalable and efficient solutions.</p>
      </motion.div>
    </section>
  );
};

export default Home;
