'use client';

import styles from './Skills.module.css';

const Skills = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.line}>
          <div className={styles.line_ball}></div>
          <div className={styles.line_button}>
            <h2 className={styles.title}>Skills</h2>
          </div>
          <div className={styles.line_line}></div>
        </div>
      </div>
      <ul className={styles.list}>
        <li className={styles.li}>
          <h3 className={styles.h3}>Front-end</h3>
          <ul className={styles.list_two}>
            <li>
              <p className={styles.skills}>HTML / CSS</p>
            </li>
            <li>
              <p className={styles.skills}>JavaScript (ES6+)</p>
            </li>
            <li>
              <p className={styles.skills}>TypeScript</p>
            </li>
            <li>
              <p className={styles.skills}>React</p>
            </li>
            <li>
              <p className={styles.skills}>Animate.css</p>
            </li>
          </ul>
        </li>
        <li className={styles.li}>
          <h3 className={styles.h3}>Back-end</h3>
          <ul className={styles.list_two}>
            <li>
              <p className={styles.skills}>Node.js</p>
            </li>
            <li>
              <p className={styles.skills}>REST API</p>
            </li>
          </ul>
        </li>
        <li className={styles.li}>
          <h3 className={styles.h3}>Utilities</h3>
          <ul className={styles.list_two}>
            <li>
              <p className={styles.skills}>Git / GitHub</p>
            </li>
            <li>
              <p className={styles.skills}>VS Code</p>
            </li>
            <li>
              <p className={styles.skills}>Browser DevTools</p>
            </li>
            <li>
              <p className={styles.skills}>Figma</p>
            </li>
          </ul>
        </li>
        <li className={styles.li}>
          <h3 className={styles.h3}>Languages</h3>
          <ul className={styles.list_two}>
            <li>
              <p className={styles.skills}>English - Pre-Intermediate</p>
            </li>
            <li>
              <p className={styles.skills}>German - Upper-Intermediate</p>
            </li>
            <li>
              <p className={styles.skills}>Ukrainian - Native</p>
            </li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Skills;
