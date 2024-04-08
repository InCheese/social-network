const ADD_POST = "ADD_POST";
const CHANGE_NEW_POST_TEXT = "CHANGE_NEW_POST_TEXT";

const SEND_MESSAGE = "SEND_MESSAGE";
const CHANGE_NEW_MESSAGE_TEXT = "CHANGE_NEW_MESSAGE_TEXT";

export let store = {
  _state: {
    profilePage: {
      posts: [
        { id: 1, message: "Hello", likesCount: 0 },
        { id: 2, message: "Hello", likesCount: 0 },
        { id: 3, message: "Hello", likesCount: 0 },
        { id: 4, message: "Hello", likesCount: 0 },
      ],
      newPostText: "it-t.com",
    },
    dialogsPage: {
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
      newMessageText: "letter",
    },
    sidebar: {},
  },
  _callSubscriber() {
    console.log("state is changed");
  },
  getState() {
    return this._state;
  },
  subscribe(observer) {
    this._callSubscriber = observer;
  },
  dispatch(action) {
    if (action.type === ADD_POST) {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber();
    } else if (action.type === CHANGE_NEW_POST_TEXT) {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber(this._state);
    } else if (action.type === SEND_MESSAGE) {
      this._state.dialogsPage.messages.push({
        id: 7,
        message: this._state.dialogsPage.newMessageText,
      });
      this._state.dialogsPage.newMessageText = "";
      this._callSubscriber(this._state);
    } else if (action.type === CHANGE_NEW_MESSAGE_TEXT) {
      this._state.dialogsPage.newMessageText = action.messageText;
      this._callSubscriber(this._state);
    }
  },
};

export const addPostActionCreator = () => ({ type: ADD_POST });

export const changeNewPostTextActionCreator = (newPostText) => ({
  type: CHANGE_NEW_POST_TEXT,
  newPostText,
});

export const sendMessageActionCreator = () => ({ type: SEND_MESSAGE });

export const changeNewMessageTextActionCreator = (messageText) => ({
  type: CHANGE_NEW_MESSAGE_TEXT,
  messageText,
});

window.store = store;
