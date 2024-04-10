import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  followUserSuccess,
  unfollowUserSuccess,
  setUsers,
  setCurrentPage,
  setTotalCount,
  getUsersThunkCreator,
  toggleFollowingProgress,
  followThunkCreator,
  unfollowThunkCreator,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.getUsers(this.props.currentPage, this.props.pageSize);
  }

  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize);
  };

  //метод render вернет jsx
  render() {
    return (
      <>
        {this.props.isFetching ? (
          <Preloader />
        ) : (
          <Users {...this.props} onPageChanged={this.onPageChanged} />
        )}
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  pageSize: state.usersReducer.pageSize,
  totalCount: state.usersReducer.totalCount,
  currentPage: state.usersReducer.currentPage,
  isFetching: state.usersReducer.isFetching,
  followingfInProgress: state.usersReducer.followingfInProgress,
});

export default connect(mapStateToProps, {
  setUsers,
  setCurrentPage,
  setTotalCount,
  getUsers: getUsersThunkCreator,
  follow: followThunkCreator,
  unfollow: unfollowThunkCreator,
})(UsersContainer);
