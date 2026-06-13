'use client';

import Image from 'next/image';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.round}></div>
      <div className={styles.line}></div>
      <h3 className={styles.author}>© 2026 Bogdan Janchenko</h3>
      <ul className={styles.ul}>
        <li className={styles.li}>
          <a className={styles.a} href="mailto:bogdanancenko9@gmail.com">
            <Image
              alt="Mail"
              className={styles.img}
              src="/footer/mail.png"
              height={36}
              width={36}
            ></Image>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.a} href="https://t.me/Bogdanissimo22">
            <Image
              alt="Telegram"
              className={styles.img}
              src="/footer/telegram.png"
              height={36}
              width={36}
            ></Image>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.a} href="https://www.linkedin.com/in/bogdan-janchenko/">
            <Image
              alt="Linkedin"
              className={styles.img}
              src="/footer/linkedin.png"
              height={36}
              width={36}
            ></Image>
          </a>
        </li>
        <li className={styles.li}>
          <a className={styles.a} href="https://github.com/BogdanJanchenko">
            <Image
              alt="Github"
              className={styles.img}
              src="/footer/github.png"
              height={36}
              width={36}
            ></Image>
          </a>
        </li>
      </ul>
      <div className={styles.line}></div>
      <div className={styles.round}></div>
    </div>
  );
};

export default Footer;
