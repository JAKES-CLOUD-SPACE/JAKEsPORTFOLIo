import React from 'react';
import Project from './Project';
import styles from './Project.module.css'; // Use CSS modules for Portfolio

const Portfolio = () => {
  const projects = [
    {
      title: 'CTRL-ALT-SHIFT',
      image: '/crtl-alt-shift.png',
      githubLink: 'https://github.com/TristanPPersaud/CTRL-ALT_SHIFTS',
      deployedLink: 'https://ctrl-alt-shifts.onrender.com/',
      readmeFile: '/readmes/ctrl-alt-shift.README.md',
    },
    {
      title: 'Money Maker',
      image: '/moneymaker.png',
      githubLink: 'https://github.com/vincentt94/Money-Maker',
      deployedLink: 'https://vincentt94.github.io/Money-Maker/',
      readmeFile: '/readmes/money-maker.md',
    },
    {
      title: 'Employee Tracker',
      image: 'https://tivazo.com/wp-content/uploads/2024/07/employee-monitoring-software-1.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/Employee-Tracker',
      deployedLink: '',
      readmeFile: '/readmes/employee-tracker.md',
    },
    {
      title: 'README Generator',
      image: '/photo1.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/challenge-7',
      deployedLink: '',
      readmeFile: '/readmes/sampleREADME.md',
    },
    {
      title: 'Weather App',
      image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6630c95d-2fb6-4ec1-a88a-f41fa2227c2a_6000x4000.jpeg',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/Challenge-9',
      deployedLink: '',
      readmeFile: '/readmes/weather-app.md',
    },
    {
      title: 'Github Profile Search',
      image: '/githubsearch.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/CandidateSearch',
      deployedLink: 'https://candidatesearchgithub.netlify.app/',
      readmeFile: '/readmes/github-profile-search.md',
    },
    {
      title: 'Secret Notes',
      image: '/notes.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/SecretNotes',
      deployedLink: '',
      readmeFile: '/readmes/secret-notes.md',
    },
    {
      title: 'Social Networking API',
      image: '/17-nosql-homework-demo-04.gif',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/Social-Network-API',
      deployedLink: '',
      readmeFile: '/readmes/social-networking-api.md',
    },
    {
      title: 'API Book List',
      image: '/bookapi.gif',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/API-Booklist',
      deployedLink: 'https://api-booklist.onrender.com',
      readmeFile: '/readmes/booklist.md',
    },
    {
      title: 'Play Planner',
      image: 'doom.png',
      githubLink: 'https://github.com/rasersharpe/play-planner',
      deployedLink: 'https://playplanner.onrender.com',
      readmeFile: '/readmes/play-planner.md',
    },
  ];

  return (
    <section id="portfolio" className={styles.portfolio}>
      <h1 className={styles.heading}>School Projects</h1>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
            readmeFile={project.readmeFile}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
