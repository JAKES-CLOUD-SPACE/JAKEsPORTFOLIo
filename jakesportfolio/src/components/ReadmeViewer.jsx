import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import './ReadmeViewer.css';

const ReadmeViewer = () => {
  const [readme, setReadme] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setLoading(true);
    
    // Get the README file path from the URL query parameters
    const searchParams = new URLSearchParams(window.location.search);
    const readmePath = searchParams.get('path');
    
    if (!readmePath) {
      setError('README path not provided');
      setLoading(false);
      return;
    }

    fetch(readmePath)
      .then(response => {
        if (!response.ok) {
          throw new Error('README file not found');
        }
        return response.text();
      })
      .then(text => {
        setReadme(text);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <section className="readme-section">
      <div className="readme-container">
        <h1>README Viewer</h1>
        <Link to="/portfolio" className="back-link">Back to Portfolio</Link>
        
        {loading && <p>Loading README...</p>}
        {error && <p className="error">{error}</p>}
        
        {!loading && !error && (
          <div className="readme-content">
            <pre>{readme}</pre>
          </div>
        )}
      </div>
    </section>
  );
};

export default ReadmeViewer;