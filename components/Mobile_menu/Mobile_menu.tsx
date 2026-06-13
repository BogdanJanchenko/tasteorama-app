import styles from './Mobile_menu.module.css';
import Image from 'next/image';

interface Mobile_menu_props {
  setIsOpen: (value: boolean) => void;
}

const Mobile_menu = ({ setIsOpen }: Mobile_menu_props) => {
  return (
    <div className={styles.modal}>
      <button className={styles.close_btn} onClick={() => setIsOpen(false)}>
        <svg className={styles.burger_btn_svg} width={24} height={24}>
          <use href="/header/close_modal_button.svg#close_modal_button" />
        </svg>
      </button>

      <ul className={styles.modal_nav}>
        <li>
          <a onClick={() => setIsOpen(false)} href="#projects">
            My projects
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="/header/resume_standart_en.pdf" download>
            Resume
          </a>
        </li>
        <li>
          <a onClick={() => setIsOpen(false)} href="#about">
            About me
          </a>
        </li>
      </ul>

      <Image src="/header/leafs.png" width={130} height={130} alt="Decorative leaves" />
    </div>
  );
};

export default Mobile_menu;
