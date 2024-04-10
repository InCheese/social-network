import { compose } from "redux";
import Dialogs from "./Dialogs";
import { sendMessageActionCreator } from "../../redux/dialogs-reducer";
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
    sendMessage: (newMessageBody) => {
      dispatch(sendMessageActionCreator(newMessageBody));
    },
  };
};

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  withAuthRedirect
)(Dialogs);
