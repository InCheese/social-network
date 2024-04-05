import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = ({ posts, addPost, newPostText, changeNewPostText }) => {
  return (
    <div className={styles.posts}>
      <div>
        <h2>My posts</h2>
        <NewPost
          addPost={addPost}
          newPostText={newPostText}
          changeNewPostText={changeNewPostText}
        />
        {posts.map((post) => (
          <Post post={post} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
