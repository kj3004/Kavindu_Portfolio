import React, { useState, useEffect } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeLink, setActiveLink] = useState("home");

  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        "home",
        "about",
        "experience",
        "education",
        "skills",
        "contact",
      ];
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && element.getBoundingClientRect().top <= 100) {
          setActiveLink(section);
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <ul>
        {["Home", "About", "Experience", "Education", "Skills", "Contact"].map(
          (item) => (
            <li key={item.toLowerCase()}>
              <Link
                to={item.toLowerCase()}
                smooth={true}
                className={activeLink === item.toLowerCase() ? "active" : ""}
              >
                {item}
              </Link>
            </li>
          )
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
