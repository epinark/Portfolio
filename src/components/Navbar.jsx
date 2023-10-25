import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
        <ul className={menuOpen ? "open" : ""}>
          <li>
            <NavLink to="/about">About</NavLink>
          </li>
          <li>
            <NavLink to="/skills">Skills</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio">Services</NavLink>
          </li>
          <li>
            <NavLink to="/contact">Contact</NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
