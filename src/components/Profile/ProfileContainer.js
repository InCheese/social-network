import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { compose } from "redux";
import Profile from "../Profile/Profile";
import {
  setUserProfileThunkCreator,
  getUserStatusThunkCreator,
  updateUserStatusThunkCreator,
  changeUserStatus,
} from "../../redux/profile-reducer";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";

export function withRouter(Children) {
  return (props) => {
    const match = { params: useParams() };
    return <Children {...props} match={match} />;
  };
}

class ProfileContainer extends React.Component {
  //метод жизненного цикла, монтирование компонента
  componentDidMount() {
    const userId = this.props.match.params.userId;
    this.props.setUser(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    //передаем все пропсы ProfileContainer в Profile
    return <Profile {...this.props} />;
  }
}

const AuthRedirectComponent = withAuthRedirect(ProfileContainer);

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
    status: state.profileReducer.status,
  };
};

export default compose(
  connect(mapStateToProps, {
    setUser: setUserProfileThunkCreator,
    getUserStatus: getUserStatusThunkCreator,
    updateUserStatus: updateUserStatusThunkCreator,
    changeUserStatus,
  }),
  withRouter,
  withAuthRedirect
)(ProfileContainer);
