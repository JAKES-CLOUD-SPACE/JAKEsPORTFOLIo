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
