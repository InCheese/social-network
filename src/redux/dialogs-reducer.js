const SEND_MESSAGE = "SEND_MESSAGE";

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
  newMessageBody: null,
};

const dialogsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageBody;
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            id: 7,
            message: body,
          },
        ],
      };
    }
    default:
      return state;
  }
};

export const sendMessageActionCreator = (newMessageBody) => ({
  type: SEND_MESSAGE,
  newMessageBody,
});

export default dialogsReducer;
