import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import NewMessage from "./NewMessage/NewMessage";

const Dialogs = ({ store }) => {
  let ms = store.getState().dialogsReducer.messages;
  return (
    <div className={styles.dialogsAndMessages}>
      <div className={styles.dialogsItems}>
        {store.getState().dialogsReducer.dialogsData.map((data) => (
          <Dialog name={data.name} id={data.id} />
        ))}
      </div>
      <div className={styles.messages}>
        <h3>Messages</h3>
        {store.getState().dialogsReducer.messages.map((m) => (
          <Message message={m.message} id={m.id} />
        ))}
        <NewMessage store={store} />
      </div>
    </div>
  );
};

export default Dialogs;
