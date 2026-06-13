'use client';

import { useEffect, useState } from 'react';
import styles from './Projects.module.css';
import Image from 'next/image';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';

import Projects_menu from '../Projects_menu/Projects_menu';

export interface Project {
  id: number;
  name: string;
  photo: string;
  type: string;
  site_link: string;
  gitHub: string;
  technologies: string;
  role: string;
  description: string;
}

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState<null | Project>(null);

  const projects: Project[] = [
    {
      id: 1,
      name: 'Business promotion',
      photo: '/projects/business_promoution.png',
      type: 'Individual project',
      site_link: `https://bogdanjanchenko.github.io/business_promotion/`,
      gitHub: `https://github.com/BogdanJanchenko/business_promotion`,
      technologies: `HTML, CSS, JS`,
      role: 'Frontend Developer',
      description: `A web application designed to support business promotion and client interaction. The system provides functionality for presenting services, introducing a development team, and enabling client registration. Includes a structured multi-section interface and a registration form for collecting and managing user data.`,
    },
    {
      id: 2,
      name: 'ArtUnity',
      photo: '/projects/art_unity.png',
      type: 'Group project',
      site_link: `https://elliereznichenko.github.io/ArtUnity/`,
      gitHub: `https://github.com/EllieReznichenko/ArtUnity/issues?q=state%3Aclosed%20is%3Apr%20author%3ABogdanJanchenko`,
      technologies: `HTML, CSS, JS`,
      role: 'Frontend Developer / Scrum master',
      description: `A web application for discovering and exploring music content. Includes a homepage with featured content and recommendations, a music library with artists and tracks, and an informational page about the project. Designed as a multi-page platform focused on user-friendly navigation and content presentation.`,
    },
    {
      id: 3,
      name: 'Crypto app',
      photo: '/projects/crypto_app.png',
      type: 'Individual project',
      site_link: `https://crypto-app-six-snowy.vercel.app/`,
      gitHub: `https://github.com/BogdanJanchenko/crypto_app`,
      technologies: `React, JS`,
      role: 'Frontend Developer',
      description: `Developed a cryptocurrency wallet interface for tracking assets and profitability. Implemented dynamic data visualization (charts) to display portfolio composition. Added advanced table sorting (by name, amount, and price) to improve usability and data analysis. `,
    },
    {
      id: 4,
      name: 'Currency coverter',
      photo: '/projects/currency_converter.png',
      type: 'Individual project',
      site_link: `https://currency-converter-gai5.vercel.app/`,
      gitHub: `https://github.com/BogdanJanchenko/currency_converter`,
      technologies: `Next.js, React, JS`,
      role: 'Frontend Developer',
      description: `Includes functionality for converting currencies based on current exchange rates. Provides a multi-page interface with a conversion tool and a separate page displaying exchange rates of a selected currency against others. `,
    },
  ];

  useEffect(() => {
    new Swiper('.swiper', {
      direction: 'horizontal',
      loop: true,
      autoHeight: true,
      simulateTouch: true,
      grabCursor: true,
      keyboard: { enabled: true, pageUpDown: true, onlyInViewport: true },
      mousewheel: { eventsTarget: '.swiper' },
      modules: [Navigation, Pagination],
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <>
      <div className={styles.about} id="projects">
        <div className={styles.line}>
          <div className={styles.line_ball}></div>
          <div className={styles.line_button}>
            <h2 className={styles.title}>My projects</h2>
          </div>
          <div className={styles.line_line}></div>
        </div>
      </div>

      <div className="swiper">
        <div className="swiper-wrapper">
          {projects.map((project) => (
            <div className={`swiper-slide ${styles.mySlide}`} key={project.id}>
              <Image
                className={styles.project_photo}
                src={project.photo}
                alt={project.name}
                height={200}
                width={300}
              />
              <h3 className={styles.h3}>{project.name}</h3>

              <button className={styles.button} onClick={() => setSelectedProject(project)}>
                Check
              </button>
            </div>
          ))}
        </div>

        <div className={`swiper-button-prev ${styles.box}`}>
          <svg className={styles.arrow}>
            <use href="/icons.svg#slider-arrow-1"></use>
          </svg>
        </div>
        <div className={`swiper-button-next ${styles.box}`}>
          <svg className={styles.arrow}>
            <use href="/icons.svg#slider-arrow-2"></use>
          </svg>
        </div>

        <div className="swiper-pagination"></div>
      </div>

      {selectedProject && (
        <Projects_menu project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </>
  );
};

export default Projects;
