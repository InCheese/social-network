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
    dialogsPage: {},
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
    if (action.type === "ADD_POST") {
      let newPost = {
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
      };
      this._state.profilePage.posts.push(newPost);
      this._callSubscriber();
    } else if (action.type === "CHANGE_NEW_POST_TEXT") {
      this._state.profilePage.newPostText = action.newPostText;
      this._callSubscriber();
    }
  },
};

window.store = store;
