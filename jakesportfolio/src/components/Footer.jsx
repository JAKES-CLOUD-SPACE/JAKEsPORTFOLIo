import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-links">
          <Link to="https://github.com/JAKES-CLOUD-SPACE" target="_blank">   
          <img 
              src={"/icons8-github-100.png"} 
              alt="Github logo" 
              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
            />
            </Link>

          <Link to="https://open.spotify.com/user/vu80z36xzf7l3qm7d4cvnit55?si=593a7e8e5bce4ffb" target="_blank">   
          <img 
              src={"/spotify-icon-2.png"} 
              alt="Spotify Logo" 
              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
            />
            </Link>

          <Link to="https://www.linkedin.com/in/jake-ringate-b590b334b/" target="_blank">   
          <img 
              src={"/linkedin-icon-2.png"} 
              alt="Linkedin Logo" 
              style={{ width: '80px', height: '80px', objectFit: 'contain' }}
            />
            </Link>
        </div>
        <div className="footer-text">
          <p>© 2025 Jake Ringate's Portfolio</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

