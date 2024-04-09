import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import avatar from "../../assets/avatar.jpeg";
const URL = "https://social-network.samuraijs.com/api/1.0/users";

const Users = ({ users, followUser, setUsers, unfollowUser }) => {
  let getUsersFoo = () => {
    if (users.length === 0) {
      axios.get(URL).then((response) => {
        setUsers(response.data.items);
      });
    }
  };

  // if (users.length === 0) {
  //   axios.get(URL).then((response) => setUsers(response.data.items));
  // }

  return (
    <>
      <button onClick={getUsersFoo}>получить пользователей</button>
      {users.map((user) => (
        <div key={user?.id} className={styles.user}>
          <div>
            <img
              src={user?.photos?.small != null ? user.photos?.small : avatar}
              className={styles.photo}
            />
            <div>
              {user.followed ? (
                <button onClick={() => unfollowUser(user.id)}>Unfollow</button>
              ) : (
                <button onClick={() => followUser(user.id)}>Follow</button>
              )}
            </div>
          </div>
          <div className={styles.content}>
            <div>{user.name}</div>
            <div>{user.status}</div>
          </div>
          <div></div>
        </div>
      ))}
    </>
  );
};

export default Users;
