const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const changeNewMessageTextActionCreator = (messageText) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  messageText,
});

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      state.messages.push({
        id: 7,
        message: state.newMessageText,
      });
      state.newMessageText = "";
      return state;
    }
    case CHANGE_NEW_MESSAGE_TEXT: {
      state.newMessageText = action.messageText;
      return state;
    }
    default:
      return state;
  }
};

export default dialogsReducer;
