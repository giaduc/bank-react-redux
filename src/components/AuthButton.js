import React, { Component } from 'react';
import { connect } from "react-redux";
import bankActionCreators from "../action/bankActionCreators";

class AuthButton extends Component {
  render() { 
    const { isLogged, onLogout } = this.props;
    const message = <p>You are not logged in.</p>;
    const logoutButton = <button onClick={ () => onLogout() }>Sign out</button>;

    return (  
      <div>
        {
          isLogged ? logoutButton : message
        }
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    isLogged: state.isLogged
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