import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import NewPost from "./NewPost/NewPost";

const MyPosts = ({ posts, newPostText, changeNewPostText, addPost }) => {
  return (
    <div className={styles.posts}>
      <div>
        <h2>My posts</h2>
        <NewPost
          addPost={addPost}
          changeNewPostText={changeNewPostText}
          newPostText={newPostText}
        />
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
      </div>
    </div>
  );
};

export default MyPosts;
