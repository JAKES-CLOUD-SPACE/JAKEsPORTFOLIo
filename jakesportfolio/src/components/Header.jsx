// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  return (

      <header>
        <div className="logo"><h1>Jake's Portfolio</h1></div>
      <nav>
        <ul className="nav-list">
          <li><Link to="/about-me">About Me</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="/resume">Resume</Link></li>
        </ul>
      </nav>
      </header>

  );
};

export default Header;
