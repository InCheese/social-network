import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import avatar from "../../assets/avatar.jpeg";
const URL = "https://social-network.samuraijs.com/api/1.0/users";

class Users extends React.Component {
  componentDidMount() {
    axios
      .get(URL + `?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    axios
      .get(URL + `?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.setUsers(response.data.items);
      });
  };

  //метод render вернет jsx
  render() {
    const pagesCount = Math.ceil(this.props.totalCount / this.props.pageSize);
    const pageNumbers = [];
    for (let i = 1; i <= pagesCount; i++) {
      pageNumbers.push(i);
    }
    return (
      <>
        <div className={styles.pages}>
          {pageNumbers.map((pageNumber) => (
            <span
              className={
                this.props.currentPage === pageNumber && styles.selectedPage
              }
              onClick={() => this.onPageChanged(pageNumber)}
            >
              {pageNumber}
            </span>
          ))}
        </div>
        <div className={styles.users}>
          {this.props.users.map((user) => (
            <div key={user?.id} className={styles.user}>
              <div>
                <img
                  src={
                    user?.photos?.small != null ? user.photos?.small : avatar
                  }
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
        </div>
      </>
    );
  }
}

export default Users;
