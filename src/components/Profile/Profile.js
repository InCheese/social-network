import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = ({ store }) => {
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer store={store} />
    </>
  );
};

export default Profile;
