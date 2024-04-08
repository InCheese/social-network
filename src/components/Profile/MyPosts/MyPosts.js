import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = ({ posts, newPostText, onChange, addPost }) => {
  return (
    <div className={styles.posts}>
      <div>
        <h2>My posts</h2>
        <NewPost
          addPost={addPost}
          onChange={onChange}
          newPostText={newPostText}
        />
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
