import React from "react";
import styles from "./NewMessage.module.css";

const NewMessage = (props) => {
  const newMessageRef = React.createRef();

  const handleClick = () => {
    const message = newMessageRef.current.value;
    alert(message);
  };
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
            ref={newMessageRef}
            placeholder="Write message..."
          ></textarea>
        </div>
        <button onClick={handleClick}>Sent</button>
      </div>
    </div>
  );
};

export default NewMessage;
