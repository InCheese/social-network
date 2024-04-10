import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import { withAuthRedirect } from "../../hoc/withAuthRedirect";
import Profile from "../Profile/Profile";
import { setUserProfileThunkCreator } from "../../redux/profile-reducer";

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
    isAuth: state.auth.isAuth,
  };
};

let withUrlDataProfileContainer = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {
  setUser: setUserProfileThunkCreator,
})(withUrlDataProfileContainer);
