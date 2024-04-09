import { connect } from "react-redux";
import Users from "./Users";
import { followAC, unfollowAC, setUsersAC } from "../../redux/users-reducer";

const mapStateToProps = (state) => ({
  users: state.usersReducer.users,
});

const mapDispatchToProps = (dispatch) => ({
  followUser: (userId) => dispatch(followAC(userId)),
  unfollowUser: (userId) => dispatch(unfollowAC(userId)),
  setUsers: (users) => dispatch(setUsersAC(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
