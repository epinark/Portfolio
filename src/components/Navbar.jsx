import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../images/logo.png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("about");

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  useEffect(() => {
    // Function to update the active section based on scroll position
    const handleScroll = () => {
      const sections = ["about", "skills", "portfolio", "contact"];
      for (const sectionId of sections) {
        const section = document.getElementById(sectionId);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 0 && rect.bottom > 0) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    // Attach scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Initial call to set the active section on page load
    handleScroll();

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const cvUrl = import.meta.env.VITE_CV_URL;

  return (
    <div>
      <nav>
        <Link to="/" className="title">
          <img src={logo} alt="logo" />
        </Link>
        <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <ul onClick={toggleMenu} className={menuOpen ? "open" : ""}>
          <li>
            <a
              href="#about"
              className={activeSection === "about" ? "active" : ""}
            >
              About
            </a>
            <span className="underline"></span>
          </li>
          <li>
            <a
              href="#skills"
              className={activeSection === "skills" ? "active" : ""}
            >
              Skills{" "}
            </a>
            <span className="underline"></span>
          </li>
          <li>
            <a
              href="#portfolio"
              className={activeSection === "portfolio" ? "active" : ""}
            >
              Portfolio{" "}
            </a>
            <span className="underline"></span>
          </li>
          <li>
            <a
              href="#contact"
              className={activeSection === "contact" ? "active" : ""}
            >
              Contact{" "}
            </a>
            <span className="underline"></span>
          </li>
          <li>
            <a href={cvUrl} download="esrapinarberkus-resume.pdf">
              Resume
            </a>
            <span className="underline"></span>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
