import React, { useState } from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const links = [
    { to: "/", label: "Home" },
    { to: "/generator", label: "Image Generator" },
    { to: "/favorites", label: "Favorites" },
    { to: "/faq", label: "FAQ" },
  ];

  return (
    <nav className="navbar">
      <div className={`navbar-content`}>
        <div className="logo">
          <Link to="/" onClick={closeMenu}>
            <img src={logo} alt="Logo" />
          </Link>
        </div>

        <div className="spacer" />

        <ul className="nav-links">
          {links.map(({ to, label }) => (
            <li key={to}>
              <Link to={to}>{label}</Link>
            </li>
          ))}
        </ul>

        <div
          className={`hamburger ${menuOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      <ul className={`mobile-menu ${menuOpen ? "open" : ""}`}>
        {links.map(({ to, label }) => (
          <li key={to}>
            <Link to={to} onClick={closeMenu}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
