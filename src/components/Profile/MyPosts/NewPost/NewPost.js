import React from "react";
import styles from "./NewPost.module.css";

const NewPost = (props) => {
  return (
    <div className={styles.content}>
      <div className={styles.textarea}>
        <textarea placeholder="your news..."></textarea>
      </div>
      <button>Add post</button>
    </div>
  );
};

export default NewPost;
