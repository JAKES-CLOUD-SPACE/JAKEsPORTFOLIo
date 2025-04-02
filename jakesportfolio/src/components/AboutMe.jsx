import React from 'react';
import './contact.css'; // Reusing your existing CSS

const AboutMe = () => {
  return (
    <section className="contact-section">
      <div className="contact-container-about-me">
        <h1>About Me</h1>
        <div className="paragraph-boxes">
          <div className="paragraph-box">
            <p>
              Hi, my name is Jake Ringate. I am 23 and I'm a junior developer from Minnesota. I have a passion for coding and love to create beautiful websites. In my free time, I enjoy hiking, driving, and listening to music. I have a certificate in coding from the U of M and I am proficient in HTML, CSS, JavaScript, Typescript, SQL, NoSQL, MongoDB, CI/CD Pipelines, React.js, Express, Node.js, MERN, Python, and OOP . Having recently completed the program, I'm currently looking for a job in web development. I'm excited to see where my coding journey takes me!
            </p>
          </div>
          
          <div className="paragraph-box">
            <p>
              I'm a very hard worker and I'm always looking to learn new things. I'm very passionate about coding and am always looking to improve my skills. I love working on projects that challenge me and allow me to grow as a developer. I'm also a team player and enjoy collaborating with others to create amazing things. If you're interested in working with me or just want to chat about coding, feel free to reach out!
            </p>
          </div>
        </div>
        
        <img 
          src="/IMG_0433.JPG" 
          alt="Jake Ringate"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = "https://via.placeholder.com/600x900?text=Jake+Ringate";
          }}
        />
      </div>
    </section>
  );
};

export default AboutMe;
