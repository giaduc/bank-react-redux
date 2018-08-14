import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import bankActionCreators from "../action/bankActionCreators";
import Protected from '../components/Protected';
import Button from '../components/Button';

class Login extends Component {
    render() { 
        const { from } = this.props.location.state || { from: { pathname: "/" } };
        const { isLogged, onLogin } = this.props;
        let login;

        if(isLogged){
            login = <Redirect to={from} />;
        } else {
            login = (
                <div>
                    <Protected pathname={from.pathname}/>
                    <Button onClick={onLogin} title="Login" />
                </div>
            );
        }

        return (
            <React.Fragment>
                {login}
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

