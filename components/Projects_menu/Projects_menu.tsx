'use client';

import { Project } from '../Projects/Projects';
import styles from './Projects_menu.module.css';
import Image from 'next/image';

interface ProjectsMenuProps {
  project: Project;
  onClose: () => void;
}

const Projects_menu = ({ project, onClose }: ProjectsMenuProps) => {
  return (
    <div className={styles.modal_overlay}>
      <div className={styles.modal}>
        <button className={styles.close_btn} onClick={() => onClose()}>
          <svg className={styles.burger_btn_svg} width={24} height={24}>
            <use href="/header/close_modal_button.svg#close_modal_button" />
          </svg>
        </button>

        <h3 className={styles.h3}>{project.name}</h3>

        <div className={styles.info_block}>
          <Image
            className={styles.project_photo}
            src={project.photo}
            alt={project.name}
            width={300}
            height={200}
          />

          <div className={styles.text_block}>
            <p className={styles.type}>{project.type}</p>
            <p className={styles.link_block}>
              <a className={styles.link} href={project.site_link}>
                {project.name}
              </a>
              ,
              <a className={styles.link} href={project.gitHub}>
                Link
              </a>{' '}
              &#91; {project.technologies} &#93;
            </p>
            <p className={styles.link_block}>Role: {project.role}</p>
            <p className={styles.link_block}>Role: {project.description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects_menu;
