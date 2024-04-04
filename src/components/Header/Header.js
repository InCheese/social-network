import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className={styles.header}>
      <a src="#">
        <img src={logo} />
      </a>
    </header>
  );
};

export default Header;
