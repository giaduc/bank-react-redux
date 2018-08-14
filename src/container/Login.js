import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import bankActionCreators from "../action/bankActionCreators";
import Protected from '../components/Protected';

class Login extends Component {
    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { isLogged, onLogin } = this.props;

        return (
            <React.Fragment>
                {isLogged ? <Redirect to={from} /> : (
                    <div>
                        <Protected pathname={from.pathname}/>
                        <button onClick={() => onLogin() }>Log in</button>
                    </div>
                )}
            </React.Fragment>
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

