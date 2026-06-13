'use client';

import styles from './Education.module.css';

const Education = () => {
  return (
    <>
      <div className={styles.about}>
        <div className={styles.line}>
          <div className={styles.line_ball}></div>
          <div className={styles.line_button}>
            <h2 className={styles.title}>Education</h2>
          </div>
          <div className={styles.line_line}></div>
        </div>
      </div>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <h3 className={styles.h3}>GoIT</h3>
          <p className={styles.p}>FullStack Developer 2024-2026 · Dnipro, Ukraine</p>
        </li>
        <li className={styles.li}>
          <a
            href="https://drive.google.com/file/d/1sysT-URSRzF7H9BPSLjZgYVZPlOdcBp3/view"
            className={styles.h3}
          >
            Language diploma in German, level B2
          </a>
          <p className={styles.p}>2024 · Ukrainian-German Lyceum No. 53 · Dnipro, Ukraine</p>
        </li>
      </ul>
    </>
  );
};

export default Education;
