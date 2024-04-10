import { compose } from "redux";
import Dialogs from "./Dialogs";
import {
  sendMessageActionCreator,
  changeNewMessageTextActionCreator,
} from "../../redux/dialogs-reducer";
import { connect } from "react-redux";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

let mapStateToProps = (state) => {
  return {
    dialogsData: state.dialogsReducer.dialogsData,
    messages: state.dialogsReducer.messages,
    newMessageText: state.dialogsReducer.newMessageText,
    isAuth: state.auth.isAuth,
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

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
