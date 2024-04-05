import React from "react";
import styles from "./Message.module.css";

const Message = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.profile}>
        <img src="https://i.pinimg.com/236x/2d/b9/00/2db9004b5969d123191db46eb3325f4e.jpg" />
        <div>Имя</div>
      </div>
      <div className={styles.message}>{props.message}</div>
    </div>
  );
};

export default Message;
