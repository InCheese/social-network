import React from "react";
import styles from "./NewMessage.module.css";
import {
  sendMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "./../../../state";

const NewMessage = ({ store }) => {
  const newMessageRef = React.createRef();

  const handleClick = () => {
    store.dispatch(sendMessageActionCreator());
    store.dispatch(changeNewMessageTextActionCreator(""));
  };

  const handleChange = (event) => {
    let messageText = event.target.value;
    store.dispatch(changeNewMessageTextActionCreator(messageText));
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
            onChange={handleChange}
            value={store.getState().dialogsPage.newMessageText}
          ></textarea>
        </div>
        <button onClick={handleClick}>Sent</button>
      </div>
    </div>
  );
};

export default NewMessage;
