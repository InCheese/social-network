import React, { useContext } from "react";
import MyPosts from "./MyPosts";
import {
  addPostActionCreator,
  changeNewPostTextActionCreator,
} from "../../../redux/profile-reducer";
import StoreContext from "../../../StoreContext";

const MyPostsContainer = () => {
  //const store = useContext(StoreContext);

  return (
    <StoreContext.Consumer>
      {(store) => {
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
      }}
    </StoreContext.Consumer>
  );
};

export default MyPostsContainer;
