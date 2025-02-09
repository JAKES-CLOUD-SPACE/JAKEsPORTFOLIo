// src/components/Resume.js
import React from 'react';

const Resume = () => {
  return (
    <section className="contact-section">
    <div className="contact-container">
      <h1>My Resume</h1>
      <a href="/path/to/resume.pdf" download>You Can Download My Resume Here</a>
      <h2>SKILLS</h2>
      <ul>
        <li>Proficienct in HTML, CSS, JAVASCRIPT, REACT,</li>
        <li>Strong attention to detail</li>
        <li>The love for problem solving</li>
      </ul>
    </div>
    </section>
  );
};

export default Resume;
