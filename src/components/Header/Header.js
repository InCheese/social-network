import React from "react";
import styles from "./Header.module.css";
import logo from "../../assets/logo.png";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={styles.header}>
      <div className={styles.content}>
        <div>
          <NavLink src="#">
            <img src={logo} />
          </NavLink>
        </div>
        <div className={styles.login}>
          {props.isAuth ? (
            <div>{props.login}</div>
          ) : (
            <NavLink to="/login">Login</NavLink>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
