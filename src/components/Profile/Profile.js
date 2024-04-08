import React, { useContext } from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import StoreContext from "../../StoreContext";

const Profile = () => {
  return (
    <>
      <ProfileInfo />
      <MyPostsContainer />
    </>
  );
};

export default Profile;
