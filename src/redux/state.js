import dialogsReducer from "./dialogs-reducer";
import profileReducer from "./profile-reducer";
import sidebarReducer from "./sidebar-reducer";

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
      newMessageText: "",
    },
    sidebarPage: {},
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
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebarPage = sidebarReducer(this._state.sidebarPage, action);
    this._callSubscriber(this._state);
  },
};

window.store = store;
