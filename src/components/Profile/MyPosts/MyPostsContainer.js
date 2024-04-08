import React from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profile-reducer";

const MyPostsContainer = ({ store }) => {
  const addPost = () => {
    store.dispatch(addPostActionCreator());
    store.dispatch(changeNewPostTextActionCreator(""));
  };

  const handlerOnChange = (event) => {
    let text = event.target.value;
    store.dispatch(changeNewPostTextActionCreator(text));
  };

  return (
    <MyPosts
      addPost={addPost}
      onChange={handlerOnChange}
      newPostText={store.getState().profileReducer.newPostText}
      posts={store.getState().profileReducer.posts}
    />
  );
};

export default MyPostsContainer;
