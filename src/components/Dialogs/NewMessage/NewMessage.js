import React from "react";
import styles from "./NewMessage.module.css";

const NewMessage = ({ onChange, onClick, newMessageText }) => {
  return (
    <div className={styles.content}>
      <div className={styles.profile}>
        <img src="https://i.pinimg.com/236x/2d/b9/00/2db9004b5969d123191db46eb3325f4e.jpg" />
        <div>Имя</div>
      </div>

      <div className={styles.newMessage}>
        <div>
          <textarea
            className={styles.message}
            placeholder="Write message..."
            onChange={onChange}
            value={newMessageText}
          ></textarea>
        </div>
        <button onClick={onClick}>Sent</button>
      </div>
    </div>
  );
};

export default NewMessage;
