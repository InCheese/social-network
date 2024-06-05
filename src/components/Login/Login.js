import React from "react";
import { connect } from "react-redux";
import { Navigate } from 'react-router-dom';
import LoginReduxForm from "./LoginForm";
import { loginThunkCreator } from "../../redux/auth-reducer";

const Login = ({loginThunkCreator, isAuth, id}) => {
  const onSubmit = (formData) => {
    const {email, password, rememberMe} = formData;
    console.log({email, password, rememberMe});
    loginThunkCreator(email, password, rememberMe);
  };

  if(isAuth) {
    return <Navigate to={`/profile/${id}`} />
  }

  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

const mapStateToProps = state => {
  return {
    isAuth: state.auth.isAuth,
    id: state.auth.id
  }
}

export default connect(mapStateToProps, {loginThunkCreator})(Login);
