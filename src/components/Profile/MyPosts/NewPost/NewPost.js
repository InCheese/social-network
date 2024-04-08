import React from "react";
import styles from "./NewPost.module.css";

const NewPost = ({ addPost, onChange, newPostText }) => {
  return (
    <div className={styles.content}>
      <div className={styles.textarea}>
        <textarea
          placeholder="Write your post..."
          value={newPostText}
          onChange={onChange}
        ></textarea>
      </div>
      <button onClick={addPost}>Add</button>
    </div>
  );
};

export default NewPost;
