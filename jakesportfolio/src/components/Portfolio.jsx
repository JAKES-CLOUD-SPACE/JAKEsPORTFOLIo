import React from 'react';
import Project from './Project';
import './Project.css';

const Portfolio = () => {
  const projects = [
    {
      title: 'Money Maker',
      image: '/moneymaker.png',
      githubLink: 'https://github.com/vincentt94/Money-Maker',
      deployedLink: '',
    },
    {
      title: 'Employee Tracker',
      image: 'https://tivazo.com/wp-content/uploads/2024/07/employee-monitoring-software-1.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/Employee-Tracker',
      deployedLink: '',
    },
    {
      title: 'README Generator',
      image: '/photo1.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/challenge-7',
      deployedLink: '',
    },
    {
      title: 'Weather App',
      image: 'https://substackcdn.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2F6630c95d-2fb6-4ec1-a88a-f41fa2227c2a_6000x4000.jpeg',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/Challenge-9',
      deployedLink: '',
    },
    {
      title: 'Github Profile Search',
      image: '/githubsearch.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/CandidateSearch',
      deployedLink: 'https://candidatesearchgithub.netlify.app/',
    },
    {
      title: 'Secret Notes',
      image: '/notes.png',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/SecretNotes',
      deployedLink: '',
    },
    {
      title: 'Social Networking API',
      image: '/17-nosql-homework-demo-04.gif',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/Social-Network-API',
      deployedLink: '',
    },
    {
      title: 'API Book List',
      image: '/bookapi.gif',
      githubLink: 'https://github.com/JAKES-CLOUD-SPACE/API-Booklist',
      deployedLink: 'https://api-booklist.onrender.com',
    },
    {
      title: 'Play Planner',
      image: 'https://ih1.redbubble.net/image.2940964139.0114/raf,360x360,075,t,fafafa:ca443f4786.u1.jpg',
      githubLink: 'https://github.com/rasersharpe/play-planner',
      deployedLink: 'https://playplanner.onrender.com',
    },
  ];

  return (
    <section id="portfolio">
      <h1 className="yurt">My Work</h1>
      <div className="projects">
        {projects.map((project, index) => (
          <Project 
            key={index}
            title={project.title}
            image={project.image}
            githubLink={project.githubLink}
            deployedLink={project.deployedLink}
          />
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
