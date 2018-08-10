import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import bankActionCreators from "../action/bankActionCreators";
import bankStore from "../store/bankStore";
import { connect } from "react-redux";

class Login extends Component {
    state = {
        redirectToReferrer: false
    };
    
    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { redirectToReferrer } = this.state;

        if (redirectToReferrer) {
        return <Redirect to={from} />;
        }

        return (
        <div>
            <p>You must log in to view the page at some {from.pathname}</p>
            <button onClick={
                // () => {}
                this.props.onLogin()
            }>Log in</button>
            {
                // for debug only
                bankStore.getState().isLogged === true ? <p>True</p> : <p>False</p>
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
        onLogin: () => dispatch(bankActionCreators.login())
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login);

