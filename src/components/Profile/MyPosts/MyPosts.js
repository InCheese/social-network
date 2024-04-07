import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = ({ posts, newPostText, dispatch }) => {
  return (
    <div className={styles.posts}>
      <div>
        <h2>My posts</h2>
        <NewPost dispatch={dispatch} newPostText={newPostText} />
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
