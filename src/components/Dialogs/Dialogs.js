import React from "react";
import styles from "./Dialogs.module.css";
import Dialog from "./Dialog/Dialog";
import Message from "./Message/Message";
import { Field, reduxForm } from "redux-form";
import { required, maxLength300 } from "../../utils/validators/validators";

const Dialogs = ({ sendMessage, dialogsData, messages, newMessageText }) => {
  const addNewMessage = (values) => {
    sendMessage(values.newMessageBody);
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
        <AddMessageFormRedux
          onSubmit={addNewMessage}
          newMessageText={newMessageText}
        />
      </div>
    </div>
  );
};

const AddMessageForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div className={styles.content}>
        <div className={styles.profile}>
          <img src="https://i.pinimg.com/236x/2d/b9/00/2db9004b5969d123191db46eb3325f4e.jpg" />
          <div>Имя</div>
        </div>

        <div className={styles.newMessage}>
          <div>
            <Field
              component="textarea"
              name="newMessageBody"
              className={styles.message}
              placeholder="Write message..."
              validate={[required, maxLength300]}
            />
          </div>
          <button>Sent</button>
        </div>
      </div>
    </form>
  );
};

const AddMessageFormRedux = reduxForm({ form: "dialogAddMessageForm" })(
  AddMessageForm
);

export default Dialogs;
