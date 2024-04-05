import { rerenderEntireTree } from "./render";

export const state = {
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
};

window.state = state;

export const addPost = () => {
  let newPost = {
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
  };
  state.profilePage.posts.push(newPost);
  rerenderEntireTree(state);
};

export const changeNewPostText = (newText) => {
  state.profilePage.newPostText = newText;
  rerenderEntireTree(state);
};
