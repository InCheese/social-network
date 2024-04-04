import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";

const Dialogs = () => {
  const dialogsData = [
    { id: 1, name: "Tanya" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Vitya" },
    { id: 4, name: "Vera" },
  ];

  const messages = [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "Privet" },
    { id: 4, message: "Be" },
  ];

  return (
    <div className={styles.dialogsAndMessages}>
      <div className={styles.dialogsItems}>
        {dialogsData.map((data) => (
          <Dialog name={data.name} id={data.id} />
        ))}
      </div>
      <div className={styles.messages}>
        Messages
        {messages.map((message) => (
          <Message message={message.message} id={message.id} />
        ))}
      </div>
    </div>
  );
};

export default Dialogs;
