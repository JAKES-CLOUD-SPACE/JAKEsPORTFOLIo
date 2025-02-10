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
              src={"/Spotify_Primary_Logo_RGB_Black.png"} 
              alt="Spotify Logo" 
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

