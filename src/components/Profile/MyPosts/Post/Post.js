import React from "react";
import styles from "./Post.module.css";

const Post = ({ post }) => {
  return (
    <div className={styles.item}>
      <div>
        <img
          src="https://i.pinimg.com/236x/2d/b9/00/2db9004b5969d123191db46eb3325f4e.jpg"
          alt="postOwnerAvatar"
        />
      </div>
      <div className={styles.message}>{post.message}</div>
    </div>
  );
};

export default Post;
