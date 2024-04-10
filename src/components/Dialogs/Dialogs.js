import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";
import { Navigate } from "react-router";

const Dialogs = ({
  changeNewMessageText,
  sendMessage,
  dialogsData,
  messages,
  newMessageText,
  isAuth,
}) => {
  const handleClick = () => {
    sendMessage();
    changeNewMessageText("");
  };

  const handleChange = (event) => {
    let messageText = event.target.value;
    changeNewMessageText(messageText);
  };

  return (
    <div className={styles.dialogsAndMessages}>
      <div className={styles.dialogsItems}>
        {dialogsData.map((data) => (
          <Dialog name={data.name} id={data.id} key={data.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <h3>Messages</h3>
        {messages.map((m) => (
          <Message message={m.message} id={m.id} key={m.id} />
        ))}
        <NewMessage
          onChange={handleChange}
          onClick={handleClick}
          newMessageText={newMessageText}
        />
      </div>
    </div>
  );
};

export default Dialogs;
