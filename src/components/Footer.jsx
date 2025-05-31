import React, { useState } from "react";
import "./Footer.scss";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());

  return (
    <footer className="footer">
      <div className="logo-container">
        <Link to="/">
          <img src={logo} className="footer-logo" />
        </Link>
      </div>
      <hr className="footer-line" />
      <p className="footer-text">
        <p className="footer-text">© {year} AI.Maker. All rights reserved.</p>
      </p>
    </footer>
  );
};

export default Footer;
