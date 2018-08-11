import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";

import bankActionCreators from "../action/bankActionCreators";
// import bankStore from "../store/bankStore";

class Login extends Component {
    state = {
        redirectToReferrer: false
    };
    
    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;
        const { isLogged, onLogin } = this.props;

        if (redirectToReferrer) {
            return <Redirect to={from} />;
        }

        return (
            <div>
                {
                    isLogged ? <p>False</p> : <p>You must log in to view the page at some {from.pathname}</p> 
                }
                <button onClick={() => onLogin() }>Log in</button>
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
        onLogin: () => dispatch(bankActionCreators.login())
    }
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

