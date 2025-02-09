import React from 'react';
import './Project.css';

const Project = ({ title, image, githubLink, deployedLink }) => {
  return (
    <div className="project-card" style={{ backgroundImage: `url(${image})` }}>
      <div className="project-info">
        <h3>{title}</h3>
        <div className="project-links">
          {deployedLink && (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              Live Demo
            </a>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
