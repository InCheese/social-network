import React from "react";
import styles from "./Users.module.css";
import avatar from "../../assets/avatar.jpeg";

const Users = (props) => {
  const pagesCount = Math.ceil(props.totalCount / props.pageSize);
  const pageNumbers = [];
  for (let i = 1; i <= pagesCount; i++) {
    pageNumbers.push(i);
  }
  return (
    <>
      <div className={styles.pages}>
        {pageNumbers.map((pageNumber) => (
          <span
            className={props.currentPage === pageNumber && styles.selectedPage}
            onClick={() => props.onPageChanged(pageNumber)}
          >
            {pageNumber}
          </span>
        ))}
      </div>
      <div className={styles.users}>
        {props.users.map((user) => (
          <div key={user?.id} className={styles.user}>
            <div>
              <img
                src={user?.photos?.small != null ? user.photos?.small : avatar}
                className={styles.photo}
              />
              <div>
                {user.followed ? (
                  <button onClick={() => props.unfollowUser(user.id)}>
                    Unfollow
                  </button>
                ) : (
                  <button onClick={() => props.followUser(user.id)}>
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
};

export default Users;
