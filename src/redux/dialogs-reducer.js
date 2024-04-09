const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const changeNewMessageTextActionCreator = (messageText) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  messageText,
});

const initialState = {
  dialogsData: [
    { id: 1, name: "Tanya" },
    { id: 2, name: "Vasya" },
    { id: 3, name: "Vitya" },
    { id: 4, name: "Vera" },
  ],
  messages: [
    { id: 1, message: "Hello" },
    { id: 2, message: "Hi" },
    { id: 3, message: "Privet" },
    { id: 4, message: "Be" },
  ],
  newMessageText: "",
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let stateCopy = { ...state };
      stateCopy.messages = [...state.messages];
      stateCopy.messages.push({
        id: 7,
        message: state.newMessageText,
      });
      stateCopy.newMessageText = "";
      return stateCopy;
    }
    case CHANGE_NEW_MESSAGE_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newMessageText = action.messageText;
      return stateCopy;
    }
    default:
      return state;
  }
};

export default dialogsReducer;
