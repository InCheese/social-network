import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import avatar from "../../assets/avatar.jpeg";
const URL = "https://social-network.samuraijs.com/api/1.0/users";

class Users extends React.Component {
  getUsersFoo = () => {
    if (this.props.users.length === 0) {
      axios.get(URL).then((response) => {
        this.props.setUsers(response.data.items);
      });
    }
  };

  //метод render вернет jsx
  render() {
    return (
      <>
        <button onClick={this.getUsersFoo}>получить пользователей</button>
        {this.props.users.map((user) => (
          <div key={user?.id} className={styles.user}>
            <div>
              <img
                src={user?.photos?.small != null ? user.photos?.small : avatar}
                className={styles.photo}
              />
              <div>
                {user.followed ? (
                  <button onClick={() => this.props.unfollowUser(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => this.props.followUser(user.id)}>
                    Follow
                  </button>
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
  }
}

export default Users;
