import React from "react";
import { connect } from "react-redux";
import { useParams } from "react-router-dom";
import axios from "axios";
import Profile from "../Profile/Profile";
import { setUserProfile } from "../../redux/profile-reducer";

const URL = "https://social-network.samuraijs.com/api/1.0/profile/";

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
    axios.get(URL + userId).then((response) => {
      this.props.setUserProfile(response.data);
    });
  }

  render() {
    //передаем все пропсы ProfileContainer в Profile
    return <Profile {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.profileReducer.profile,
  };
};

let withUrlDataProfileContainer = withRouter(ProfileContainer);

export default connect(mapStateToProps, { setUserProfile })(
  withUrlDataProfileContainer
);
