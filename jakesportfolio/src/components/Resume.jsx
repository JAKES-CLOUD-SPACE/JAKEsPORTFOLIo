import React from 'react';

const Resume = () => {
  return (
    <section className="resume-section">
    <div className="resume-container">
      <h1>My Resume</h1>
      <a href="/src/assets/jake.pdf" download>You Can Download My Resume Here</a>
      <iframe 
        src="/src/assets/jake.pdf" 
        width="100%" 
        height="800px" 
        title="Resume"
      >        Sorry, your browser doesn't support embedded PDFs.
      </iframe>
    </div>
    </section>
  );
};

export default Resume;
