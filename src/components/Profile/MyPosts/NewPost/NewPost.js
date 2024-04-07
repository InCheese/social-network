import React from "react";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  const addPost = () => {
    props.dispatch({ type: "ADD_POST" });
    props.dispatch({ type: "CHANGE_NEW_POST_TEXT", newPostText: "" });
  };
  const newPostElement = React.createRef(); //создаем ссылку, в textarea привязываем

  const handlerOnChange = () => {
    let text = newPostElement.current.value;
    props.dispatch({ type: "CHANGE_NEW_POST_TEXT", newPostText: text });
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
