import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const cvUrl = import.meta.env.VITE_CV_URL;

  return (
    <div>
      <nav>
        <Link to="/" className="title">
          Website
        </Link>
        <div className={`menu ${menuOpen ? "open" : ""}`} onClick={toggleMenu}>
          <span className="line-1"></span>
          <span className="line-2"></span>
          <span className="line-3"></span>
        </div>
        <ul onClick={toggleMenu} className={menuOpen ? "open" : ""}>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills </a>
          </li>
          <li>
            <a href="#portfolio">Portfolio </a>
          </li>
          <li>
            <a href="#contact">Contact </a>
          </li>
          <li>
            <a href={cvUrl} download="esrapinarberkus-resume.pdf">
              Resume
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
