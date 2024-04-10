import React from "react";
import axios from "axios";
import styles from "./Users.module.css";
import avatar from "../../assets/avatar.jpeg";
import { NavLink } from "react-router-dom";

const URL = "https://social-network.samuraijs.com/api/1.0/follow/";

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
            onClick={() => {
              props.onPageChanged(pageNumber);
            }}
          >
            {pageNumber}
          </span>
        ))}
      </div>
      <div className={styles.users}>
        {props.users.map((user) => (
          <div key={user?.id} className={styles.user}>
            <div>
              <NavLink to={"/profile/" + user.id}>
                <img
                  src={
                    user?.photos?.small != null ? user.photos?.small : avatar
                  }
                  className={styles.photo}
                />
              </NavLink>

              <div>
                {user.followed ? (
                  <button
                    onClick={() => {
                      axios
                        .delete(URL + `${user.id}`, {
                          withCredentials: true,
                          headers: {
                            "API-KEY": "77b03694-e7c9-461f-a471-650bdc9bd4a7",
                          },
                        })
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.unfollowUser(user.id);
                          }
                        });
                    }}
                  >
                    Unfollow
                  </button>
                ) : (
                  <button
                    onClick={() => {
                      axios
                        .post(
                          URL + `${user.id}`,
                          {},
                          {
                            withCredentials: true,
                            headers: {
                              "API-KEY": "77b03694-e7c9-461f-a471-650bdc9bd4a7",
                            },
                          }
                        )
                        .then((response) => {
                          if (response.data.resultCode === 0) {
                            props.followUser(user.id);
                          }
                        });
                    }}
                  >
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
