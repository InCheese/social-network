import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = ({
  changeNewMessageText,
  sendMessage,
  dialogsData,
  messages,
  newMessageText,
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
          <Dialog name={data.name} id={data.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <h3>Messages</h3>
        {messages.map((m) => (
          <Message message={m.message} id={m.id} />
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
