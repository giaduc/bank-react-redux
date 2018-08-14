import React, { Component } from 'react';
import { connect } from "react-redux";
import bankActionCreators from "../action/bankActionCreators";

import Message from '../components/Message';
import Button from '../components/Button';

class Logout extends Component {
  render() { 
    const { isLogged, onLogout } = this.props;
    const message = "You are not logged in";

    return (  
      <div>
        {isLogged ? <Button onClick={ onLogout } title="Sign out" /> : <Message message={message}/>}
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
)(Logout);