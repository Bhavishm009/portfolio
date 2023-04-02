import React from 'react';
import saloon from '../../assets/Saloon.png';
import weather from '../../assets/Weather.png';
import IMG3 from '../../assets/shelter.png';
import Twitter from '../../assets/Twitter.png';
import Youtube from '../../assets/YouTube.png';
import IMG6 from '../../assets/math.png';

import './portfolio.css';

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: 'Beauty Saloon',
      img: saloon,
      description:
        `BookStore app that allows users to Book An Appoinment And Explore Package's Of Saloon `,
      technologies: 'React | Recoil | Css',
      link: 'https://beauty-dusky.vercel.app/',
      github: 'https://github.com/Bhavishm009/Beauty-saloon',
    },
    {
      id: 2,
      title: 'Weather',
      img: weather,
      description:
        'FakeStore app that provides information about available products and their details',
      technologies: 'React | Recoil',
      link: 'https://weather-app-five-umber.vercel.app/',
      github: 'https://github.com/Bhavishm009/weather-app',
    },
    {
      id: 3,
      title: 'Twitter Clone',
      img: Twitter,
      description: 'User friendly app to plan your day and manage tasks',
      technologies: 'JavaScript | MUI | css ',
      link: 'https://project3-twitter.vercel.app/',
      github: 'https://github.com/Bhavishm009/project3_twitter',
    },
    {
      id: 4,
      title: 'You Tube Clone',
      img: Youtube,
      description:
        'You Tube Clone App',
      technologies: 'JavaScript | CSS | Rapid Api v3 ',
      link: 'https://youtube-clone-eosin-zeta.vercel.app/',
      github: 'https://github.com/Bhavishm009/Youtube-Clone',
    }
  ];

  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                GitHub
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Visit Website
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
