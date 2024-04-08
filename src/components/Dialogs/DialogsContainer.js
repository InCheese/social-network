import React from "react";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";

const DialogsContainer = ({ store }) => {
  const handleClick = () => {
    store.dispatch(sendMessageActionCreator());
    store.dispatch(changeNewMessageTextActionCreator(""));
  };

  const handleChange = (event) => {
    let messageText = event.target.value;
    store.dispatch(changeNewMessageTextActionCreator(messageText));
  };

  return (
    <Dialogs
      dialogsData={store.getState().dialogsReducer.dialogsData}
      messages={store.getState().dialogsReducer.messages}
      onChange={handleChange}
      onClick={handleClick}
      newMessageText={store.getState().dialogsReducer.newMessageText}
    />
  );
};

export default DialogsContainer;
