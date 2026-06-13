'use client';

import styles from './About.module.css';

const About = () => {
  return (
    <div className={styles.about} id="about">
      <div className={styles.line}>
        <div className={styles.line_ball}></div>
        <div className={styles.line_button}>
          <h2 className={styles.title}>About me</h2>
        </div>
        <div className={styles.line_line}></div>
      </div>

      <p className={styles.p}>
        Junior Frontend Developer with experience working in a team environment using Agile / Scrum
        methodology. Involved in building responsive and adaptive user interfaces and collaborating
        effectively within cross-functional teams. Strong attention to detail, responsible in task
        execution, and motivated to continuously improve frontend development skills. Motivated and
        interested in web application development.
      </p>
    </div>
  );
};

export default About;
