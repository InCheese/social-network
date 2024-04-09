import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsReducer.dialogsData,
    messages: state.dialogsReducer.messages,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    sendMessage: () => {
      dispatch(sendMessageActionCreator());
    },
    changeNewMessageText: (text) => {
      dispatch(changeNewMessageTextActionCreator(text));
    },
  };
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
