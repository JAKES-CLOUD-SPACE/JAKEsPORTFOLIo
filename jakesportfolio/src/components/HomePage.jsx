import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';
import './Project.module.css';

const HomePage = () => {
  const currentDate = new Date();
  const formattedDate = currentDate.toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
  });

  return (
    <div className="home-container">
      <div className="availability">
        <div className="date-circle">
          <span className="availability-text">as of</span>
          <span className="date">{formattedDate}</span>
          <span className="availability-text">looking for work</span>
        </div>
      </div>
      
      <div className="creative-text">
        <svg viewBox="0 0 300 100" width="300" height="100">
          <defs>
            {/* Wider and deeper curve to ensure all letters follow the path */}
            <path id="curve" d="M10,50 Q150,150 290,50" />
          </defs>
          <text>
            <textPath xlinkHref="#curve" startOffset="50%" textAnchor="middle" className="curved-text">
              CREATIVE
            </textPath>
          </text>
        </svg>
      </div>
      
      <div className="creative">
        <h1>
          <span>Designer<span className="ampersand">&</span></span>
          <span>Developer</span>
        </h1>
        </div>

        <div className="home-content">
          <p>
            Hi, I'm a junior developer and UI/UX designer from Minnesota. I have a passion for coding and love to create beautiful websites.
            I have a certificate in software development from the University of Minnesota.
            I'm always looking to learn new things and improve my skills.
            I also enjoy collaborating with others to create amazing things.
            If you're interested in working with me or me working for you, feel free to reach out!
          </p>
          <div className="button-container">
            <a href="/contact" className="cta-button">Hire Me!</a>
            <Link to="/about" className="cta-button">MORE about Me!</Link>
            <a href="/portfolio" className="cta-button">All my Work!</a>
          </div>

          {/* New Projects Section */}
          <div className="projects-section">
            <h2 className="projects-heading">Select Projects</h2>
            <div className="projects-grid">
              {/* First project: left-aligned */}
              <div className="project-wrapper project-wrapper-left">
                <div className="project-card project-left">
                <a href="https://ctrl-alt-shifts.onrender.com/" target="_blank" rel="noopener noreferrer">
                  <img src="/crtl-alt-shift.png" alt="ctrl-alt-shift" className="project-image" />
                  </a>
                </div>
                <div className="project-info project-info1">
                  <h3>CTRL ALT SHIFT</h3>
                  <p>Frontend: React, React Router, GraphQL, Tailwind CSS;</p><p> Backend: Node.js, Express.js, MongoDB</p>
                </div>
              </div>
              
              {/* Second project: right-aligned */}
              <div className="project-wrapper project-wrapper-right">
                <div className="project-card project-right">
                <a href="https://playplanner.onrender.com" target="_blank" rel="noopener noreferrer">
                  <img src="/doom.png" alt="play planner" className="project-image" />
                  </a>
                </div>
                <div className="project-info project-info2">
                  <h3>Play Planner</h3>
                  <p>HTML5, CSS3, Typescript, Bootstrap, Node, React, Express, SQL, RESTful API</p>
                </div>
              </div>
              
              {/* Third project: center-aligned */}
              <div className="project-wrapper project-wrapper-center">
                <div className="project-card project-center">
                <a href="https://vincentt94.github.io/Money-Maker/" target="_blank" rel="noopener noreferrer">
                  <img src="/moneymaker.png" alt="money maker" className="project-image" />
                  </a>
                </div>
                <div className="project-info project-info3">
                  <h3>Money Maker</h3>
                  <p>HTML5, CSS3, Javascript, Bootstrap</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default HomePage;