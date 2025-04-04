import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import "./Header.css";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-top">
        {/* Add a conditional class to the logo */}
        <div className={`logo ${menuOpen ? "invisible" : ""}`}>Jake Ringate</div>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </div>
      <nav className={menuOpen ? "nav-open" : ""}>
        <ul className="nav-list">
          <li><Link to="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/portfolio" onClick={() => setMenuOpen(false)}>Portfolio</Link></li>
          <li><Link to="/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
          <li><Link to="/resume" onClick={() => setMenuOpen(false)}>Resume</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
