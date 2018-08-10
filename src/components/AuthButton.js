import React from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from "react-redux";
import bankActionCreators from "../action/bankActionCreators";
import bankStore from "../store/bankStore";

const AuthButton = withRouter(
  ({ history }) =>
    fakeAuth.isAuthenticated ? (
      <p>
        Welcome!{" "}
        <button
          onClick={() => {
            fakeAuth.signout(() => history.push("/"));
          }}
        >
          Sign out
        </button>
      </p>
    ) : (
      <p>You are not logged in. {bankStore.getState().log}</p>
    )
);

const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
        this.isAuthenticated = true;
        setTimeout(cb, 100); // fake async
    },
    signout(cb) {
        this.isAuthenticated = false;
        setTimeout(cb, 100);
    }
};

const mapStateToProps = state => {
  return {
    isLogged: state.log
  }
};

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(bankActionCreators.logout())
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AuthButton);