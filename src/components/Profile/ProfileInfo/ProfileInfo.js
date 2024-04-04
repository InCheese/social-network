import React from "react";
import styles from "./ProfileInfo.module.css";

const ProfileInfo = () => {
  return (
    <div className={styles.profile}>
      <div className={styles.avatar}>
        <img src="https://i.pinimg.com/236x/2d/b9/00/2db9004b5969d123191db46eb3325f4e.jpg" />
      </div>
      <div className={styles.info}>
        <div className={styles.name}>
          <h2>Inna Khagleeva</h2>
        </div>
        <div className={styles.description}>
          <p>Date of Birth: 30 May</p>
          <p>City: Moscow</p>
          <p>Education: NSU'16</p>
          <p>Website: https://github.com/InCheese</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileInfo;
