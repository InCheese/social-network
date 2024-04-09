import { connect } from "react-redux";
import Users from "./Users";
import {
  followAC,
  unfollowAC,
  setUsersAC,
  setCurrentPageAC,
  setTotalCountAC,
} from "../../redux/users-reducer";

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
