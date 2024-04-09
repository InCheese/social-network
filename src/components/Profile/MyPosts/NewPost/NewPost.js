import React from "react";
import styles from "./NewPost.module.css";

const NewPost = ({ addPost, changeNewPostText, newPostText }) => {
  const handleClick = () => {
    addPost();
    changeNewPostText("");
  };
  const handleOnChange = (event) => {
    let text = event.target.value;
    changeNewPostText(text);
  };
  return (
    <div className={styles.content}>
      <div className={styles.textarea}>
        <textarea
          placeholder="Write your post..."
          value={newPostText}
          onChange={handleOnChange}
        ></textarea>
      </div>
      <button onClick={handleClick}>Add</button>
    </div>
  );
};

export default NewPost;
