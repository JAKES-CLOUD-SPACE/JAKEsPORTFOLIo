import React from 'react';

const Resume = () => {
  return (
    <section className="resume-section">
    <section className="resume-container">
      <h1>My Resume</h1>
      <a className='resume-link' href="/resume2025.pdf" download>You Can Download My Resume Here</a>
      <iframe 
        src="/resume2025.pdf" 
        width="100%" 
        height="800px" 
        title="Resume"
      >        Sorry, your browser doesn't support embedded PDFs.
      </iframe>
    </section>
    </section>
  );
};

export default Resume;
