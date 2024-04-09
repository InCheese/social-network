import { connect } from "react-redux";
import React from "react";
import axios from "axios";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalCountAC,
  toggleIsFetchingAC,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";

const URL = "https://social-network.samuraijs.com/api/1.0/users";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    axios
      .get(URL + `?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
        this.props.setTotalCount(response.data.totalCount);
      });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    axios
      .get(URL + `?page=${pageNumber}&count=${this.props.pageSize}`)
      .then((response) => {
        this.props.toggleIsFetching(false);
        this.props.setUsers(response.data.items);
      });
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
});

export default connect(mapStateToProps, {
  followUser: followAC,
  unfollowUser: unfollowAC,
  setUsers: setUsersAC,
  setCurrentPage: setCurrentPageAC,
  setTotalCount: setTotalCountAC,
  toggleIsFetching: toggleIsFetchingAC,
})(UsersContainer);
