import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ store }) => {
  return (
    <>
      <ProfileInfo />
      <MyPosts store={store} />
    </>
  );
};

export default Profile;
