import React from "react";
import styles from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = ({ profile }) => {
  if (!profile) {
    return <Preloader />;
  }

  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img
          src={
            profile.photos
              ? profile.photos.large
              : "https://i.pinimg.com/236x/2d/b9/00/2db9004b5969d123191db46eb3325f4e.jpg"
          }
        />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <h2>{profile.fullName}</h2>
        </div>
        <div className={styles.description}>
          <p>{profile.aboutMe}</p>
          {/* <p>Date of Birth: 30 May</p>
          <p>City: Moscow</p>
          <p>Education: NSU'16</p>
          <p>Website: https://github.com/InCheese</p> */}
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
