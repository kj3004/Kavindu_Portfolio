import React from "react";
import { FaCode, FaTools } from "react-icons/fa";

const Skills = () => {
  return (
    <section id="skills" className="skills-section">
      <h2>
        <FaCode /> Skills
      </h2>
      <div className="card">
        <h3>
          <FaTools /> Technical Skills
        </h3>
        <ul>
          <li>Python, Java, JavaScript, TypeScript, C, C++, PHP</li>
          <li>React, Next.js, Node.js, Express.js, Django</li>
          <li>MySQL, MongoDB</li>
        </ul>
      </div>
      <div className="card">
        <h3>
          <FaTools /> Soft Skills
        </h3>
        <ul>
          <li>Communication, Problem-Solving, Teamwork</li>
          <li>Adaptability, Leadership, Time Management</li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
