import "./Navbar.css";
import { useState, useEffect } from "react";

function Navbar() {

  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const sections = document.querySelectorAll("section");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark fixed-top custom-navbar">
      <div className="container">

        {/* Logo */}

        <a className="navbar-brand logo" href="#hero">
          <strong>PORTFOLIO.</strong>
        </a>

        {/* Mobile Toggle */}

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarMenu"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Menu */}

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarMenu"
        >

          <ul className="navbar-nav">

            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "about" ? "active" : ""}`}
                href="#about">About
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "skills" ? "active" : ""}`}
                href="#skills">Skills
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "projects" ? "active" : ""}`}
                href="#projects">Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className={`nav-link ${activeSection === "contact" ? "active" : ""}`}
                href="#contact">Contact
              </a>
            </li>

          </ul>

        </div>

      </div>

    </nav>
  );
}

export default Navbar;