import React from "react";
import styles from "./Footer.module.css";
import dogsFooter from '../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <img src={dogsFooter} alt="Logo Dogs" />
      <p>Dogs. Alguns direitos reservados. &copy;</p>
    </footer>
  );
};

export default Footer;