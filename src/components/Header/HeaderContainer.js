import React from "react";
import { connect } from "react-redux";
import axios from "axios";
import Header from "./Header";
import { setUserData } from "../../redux/auth-reducer";

const URL = "https://social-network.samuraijs.com/api/1.0/";

class HeaderContainer extends React.Component {
  //метод жизненного цикла, монтирование компонента
  componentDidMount() {
    axios.get(URL + "auth/me", { withCredentials: true }).then((response) => {
      if (response.data.resultCode === 0) {
        const { id, login, email } = response.data.data;
        this.props.setUserData(id, login, email);
      }
    });
  }
  render() {
    return <Header {...this.props} />;
  }
}

const mapStateToProps = (state) => {
  return {
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email,
    isAuth: state.auth.isAuth,
  };
};

export default connect(mapStateToProps, { setUserData })(HeaderContainer);
