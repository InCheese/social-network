import React from "react";
import styles from "./Profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ posts }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts posts={posts} />
    </>
  );
};

export default Profile;
