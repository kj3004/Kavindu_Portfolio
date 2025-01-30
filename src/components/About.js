import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="about-section">
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h2>About Me</h2>
        <p>
          I am a dedicated Computer Science and Technology undergraduate from
          Uva Wellassa University of Sri Lanka. I have a strong background in
          programming and development, with experience in building web and
          mobile applications.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
