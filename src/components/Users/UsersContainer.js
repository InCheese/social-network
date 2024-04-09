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
} from "../../redux/users-reducer";

const URL = "https://social-network.samuraijs.com/api/1.0/users";

class UsersContainer extends React.Component {
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
    return <Users {...this.props} onPageChanged={this.onPageChanged} />;
  }
}

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
  pageSize: state.usersReducer.pageSize,
  totalCount: state.usersReducer.totalCount,
  currentPage: state.usersReducer.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  followUser: (userId) => dispatch(followAC(userId)),
  unfollowUser: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPageAC(pageNumber)),
  setTotalCount: (totalCount) => dispatch(setTotalCountAC(totalCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
