import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts, addPost, newPostText, changeNewPostText }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts
        posts={posts}
        addPost={addPost}
        newPostText={newPostText}
        changeNewPostText={changeNewPostText}
      />
    </>
  );
};

export default Profile;
