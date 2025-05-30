import React from "react";
import "./Footer.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="footer-logo" />
        </Link>
      </div>
      <hr className="footer-line" />
      <p className="footer-text">© 2025 AI.Maker. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
