import React from "react";
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  return (
    <section id="education" className="education-section">
      <h2>
        <FaGraduationCap /> Education
      </h2>
      <div className="card">
        <h3>Uva Wellassa University of Sri Lanka</h3>
        <p>B.Sc. (Hons) in Computer Science & Technology</p>
        <p>GPA: 3.4/4.0 | 2019 – 2025 (Expected)</p>
      </div>
    </section>
  );
};

export default Education;
