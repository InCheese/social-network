import React from "react";
import { reduxForm, Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="login" component="input" />
      </div>
      <div>
        <Field placeholder="Password" name="password" component="input" />
      </div>
      <div>
        <Field type="checkbox" component="input" name="rememberMe" /> remember
        me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm({
  //a unique name for the form
  form: "loginForm",
})(LoginForm);

export default LoginReduxForm;
