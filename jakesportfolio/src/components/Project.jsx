import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Project.module.css';

const Project = ({ title, image, githubLink, deployedLink, readmeFile }) => {
  // Create a URL-friendly version of the title for routing
  const encodedTitle = encodeURIComponent(title);
  
  return (
    <div className={styles['project-card']} style={{ backgroundImage: `url(${image})` }}>
      <div className={styles['project-info']}>
        <h3>{title}</h3>
        <div className={styles['project-links']}>
          {deployedLink && (
            <a href={deployedLink} target="_blank" rel="noopener noreferrer">
              Deployed Link
            </a>
          )}
          <a href={githubLink} target="_blank" rel="noopener noreferrer">
            GitHub
          </a>
          {readmeFile && (
            <Link 
              to={`/readme/${encodedTitle}?path=${readmeFile}`} 
              className={styles['readme-link']}
            >
              View README
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
