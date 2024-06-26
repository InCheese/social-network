import React from "react";
import { connect } from "react-redux";
import { Navigate } from "react-router";

const mapStateToProps = (state) => {
  return {
    isAuth: state.auth.isAuth,
  };
};

export const withAuthRedirect = (Component) => {
  class RedirectComponent extends React.Component {
    render() {
      if (!this.props.isAuth) {
        return <Navigate to="/login" />;
      }
      return <Component {...this.props} />;
    }
  }

  const ConnectedRedirectComponent =
    connect(mapStateToProps)(RedirectComponent);
  return ConnectedRedirectComponent;
};
