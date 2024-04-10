import React from "react";
import LoginReduxForm from "./LoginForm";

const Login = () => {
  const onSubmit = (formData) => {
    alert(formData.login);
  };
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} />
    </div>
  );
};

export default Login;
