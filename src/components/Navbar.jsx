import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className={`navbar ${menuOpen ? "menu-open" : ""}`}>
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>
      </div>

      <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/generator" onClick={() => setMenuOpen(false)}>
            Image Generator
          </Link>
        </li>
        <li>
          <Link to="/favorites" onClick={() => setMenuOpen(false)}>
            Favorites
          </Link>
        </li>
        <li>
          <Link to="/faq" onClick={() => setMenuOpen(false)}>
            FAQ
          </Link>
        </li>
      </ul>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={toggleMenu}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
};

export default Navbar;
