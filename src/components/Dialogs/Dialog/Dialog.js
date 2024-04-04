import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Dialog.module.css";

const Dialog = (props) => {
  const path = "/dialogs/" + props.id;
  return (
    <div className={styles.dialogsItem + " " + styles.active}>
      <NavLink to={path}>{props.name}</NavLink>
    </div>
  );
};

export default Dialog;
