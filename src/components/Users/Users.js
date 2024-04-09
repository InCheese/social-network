import React from "react";
import styles from "./Users.module.css";

const Users = ({ users, followUser, setUsers, unfollowUser }) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          <div>
            <img src={user.photoUrl} className={styles.photo} />
            <div>
              {user.followed ? (
                <button onClick={() => unfollowUser(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => followUser(user.id)}>Follow</button>
              )}
            </div>
          </div>
          <div>
            <div>{user.fullName}</div>
            <div>{user.status}</div>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default Users;
