import { connect } from "react-redux";
import React from "react";
import Users from "./Users";
import {
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
} from "../../redux/users-reducer";
import Preloader from "../common/Preloader/Preloader";
import { getUsers } from "../../api/api";

class UsersContainer extends React.Component {
  componentDidMount() {
    this.props.toggleIsFetching(true);
    getUsers(this.props.currentPage, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
      this.props.setTotalCount(data.totalCount);
    });
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber);
    this.props.toggleIsFetching(true);
    getUsers(pageNumber, this.props.pageSize).then((data) => {
      this.props.toggleIsFetching(false);
      this.props.setUsers(data.items);
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
  followUser,
  unfollowUser,
  setUsers,
  setCurrentPage,
  setTotalCount,
  toggleIsFetching,
})(UsersContainer);
