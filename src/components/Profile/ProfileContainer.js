import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Profile from "../Profile/Profile";
import { setUserProfile } from "../../redux/profile-reducer";

const URL = "https://social-network.samuraijs.com/api/1.0/profile/";

class ProfileContainer extends React.Component {
  //метод жизненного цикла, монтирование компонента
  componentDidMount() {
    axios.get(URL + "2").then((response) => {
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

export default connect(mapStateToProps, { setUserProfile })(ProfileContainer);
