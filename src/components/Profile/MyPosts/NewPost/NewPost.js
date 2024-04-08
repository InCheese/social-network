import React from "react";
import styles from "./NewPost.module.css";
import {
  changeNewPostTextActionCreator,
  addPostActionCreator,
} from "../../../../state";

const NewPost = (props) => {
  const addPost = () => {
    props.dispatch(addPostActionCreator());
    props.dispatch(changeNewPostTextActionCreator(""));
  };
  const newPostElement = React.createRef(); //создаем ссылку, в textarea привязываем

  const handlerOnChange = () => {
    let text = newPostElement.current.value;
    props.dispatch(changeNewPostTextActionCreator(text));
  };

  return (
    <div className={styles.content}>
      <div className={styles.textarea}>
        <textarea
          ref={newPostElement}
          placeholder="Write your post..."
          value={props.newPostText}
          onChange={handlerOnChange}
        ></textarea>
      </div>
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default NewPost;
