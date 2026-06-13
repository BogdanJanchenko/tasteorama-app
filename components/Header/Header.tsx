'use client';

import styles from './Header.module.css';
import Image from 'next/image';

import { useState } from 'react';
import Mobile_menu from '../Mobile_menu/Mobile_menu';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <nav>
          <ul className={styles.nav}>
            <li className={styles.nav_buttons}>
              <a className={styles.nav_button} href="#projects">
                My projects
              </a>
            </li>
            <li className={styles.nav_buttons}>
              <a className={styles.nav_button} href="/header/resume_standart_en.pdf" download>
                Resume
              </a>
            </li>
            <li className={styles.nav_buttons}>
              <a className={styles.nav_button} href="#about">
                About me
              </a>
            </li>
          </ul>
        </nav>

        <div className={styles.hero}>
          <div className={styles.text_block}>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={styles.burger_btn}
              aria-label="Open menu"
            >
              <svg className={styles.burger_btn_svg} width={24} height={24}>
                <use href="/header/burger_button.svg#burger_button" />
              </svg>
            </button>

            <div className={styles.text_block_info}>
              <h1 className={styles.text_name}>Bogdan Janchenko</h1>
              <h2 className={styles.text_post}>JUNIOR FRONTEND DEVELOPER</h2>
            </div>

            <Image
              className={styles.photo}
              src="/header/photo.jpg"
              width={178}
              height={178}
              alt="Me photo"
            />
          </div>

          <Image
            className={styles.leafs}
            src="/header/leafs.png"
            width={178}
            height={178}
            alt="Decorative leaves"
          />
        </div>
      </header>

      {isOpen && <Mobile_menu setIsOpen={setIsOpen} />}
    </>
  );
};

export default Header;
