import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }

    state = {
        redirectToReferrer: false
    };
    
    login = () => {
        fakeAuth.authenticate(() => {
            this.setState({ redirectToReferrer: true });
        });
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
            <button onClick={this.login}>Log in</button>
        </div>
        );
    }
}
 
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

export default Login;

