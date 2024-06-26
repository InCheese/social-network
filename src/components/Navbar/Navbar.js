import React from "react";
import styles from "./Navbar.module.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.sidebar}>
      <div className={styles.item}>
        <NavLink
          to="/profile/31060"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Profile
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/dialogs"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Messages
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/Users">Users</NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/news"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          News
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink
          to="/music"
          className={(navData) =>
            navData.isActive ? styles.active : styles.item
          }
        >
          Music
        </NavLink>
      </div>
      <div className={styles.item}>
        <NavLink to="/settings">Settings</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
