'use client';

import styles from './Contacts.module.css';
import Image from 'next/image';

const Contacts = () => {
  return (
    <div className={styles.contacts}>
      <div className={styles.top_block}>
        <div className={styles.contacts_button}>
          <h2 className={styles.contacts_word}>CONTACTS</h2>
        </div>
        <a className={styles.contacts_button} href="/header/resume_standart_en.pdf" download>
          <p className={styles.download}>DOWNLOAD CV</p>
          <Image
            className={styles.arrow}
            src="/contacts/arrow.png"
            width={16}
            height={16}
            alt="Arrow"
          />
        </a>
      </div>

      <Image
        className={styles.arrow_bracket}
        src="/contacts/arrow_bracket.png"
        width={86}
        height={192}
        alt="Arrow with bracket"
      />

      <ul className={styles.list_contacts}>
        <li>
          <a className={styles.list_li} href="tel:+380993170004">
            +38 (099) 317-00-04
          </a>
        </li>
        <li>
          <a className={styles.list_li} href="mailto:bogdanancenko9@gmail.com">
            bogdanancenko9@gmail.com
          </a>
        </li>
        <li>
          <a className={styles.list_li} href="https://t.me/Bogdanissimo22">
            Telegram
          </a>
        </li>
        <li>
          <a className={styles.list_li} href="https://www.linkedin.com/in/bogdan-janchenko/">
            Linkedin
          </a>
        </li>
        <li>
          <a className={styles.list_li} href="https://github.com/BogdanJanchenko">
            GitHub
          </a>
        </li>
        <li>
          <a
            className={styles.list_li}
            href="https://www.google.com/maps/place/%D0%94%D0%BD%D0%B5%D0%BF%D1%80,+%D0%94%D0%BD%D0%B5%D0%BF%D1%80%D0%BE%D0%BF%D0%B5%D1%82%D1%80%D0%BE%D0%B2%D1%81%D0%BA%D0%B0%D1%8F+%D0%BE%D0%B1%D0%BB%D0%B0%D1%81%D1%82%D1%8C,+49000/@48.4621809,34.8355507,11z/data=!3m1!4b1!4m6!3m5!1s0x40dbe303fd08468f:0xa1cf3d5f2c11aba!8m2!3d48.464717!4d35.046183!16zL20vMDN4NDVw?authuser=0&entry=ttu&g_ep=EgoyMDI2MDQxMi4wIKXMDSoASAFQAw%3D%3D"
          >
            Dnipro, Ukraine
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
