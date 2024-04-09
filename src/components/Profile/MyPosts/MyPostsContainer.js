import React, { useContext } from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import { connect } from "react-redux";

let mapStateToProps = (state) => {
  return {
    newPostText: state.profileReducer.newPostText,
    posts: state.profileReducer.posts,
  };
};

let mapDispatchToProps = (dispatch) => {
  return {
    addPost: () => {
      dispatch(addPostActionCreator());
    },
    changeNewPostText: (text) => {
      dispatch(changeNewPostTextActionCreator(text));
    },
  };
};

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
