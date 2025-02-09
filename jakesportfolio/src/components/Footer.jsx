import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="https://github.com/JAKES-CLOUD-SPACE" target="_blank">GitHub</Link>
          <Link to="https://www.linkedin.com/in/your-profile/" target="_blank">LinkedIn</Link>
          <Link to="https://twitter.com/your-profile" target="_blank">Twitter</Link>
        </div>
        <div className="footer-text">
          <p>© 2025 Jake's Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

