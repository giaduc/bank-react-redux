import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import { connect } from 'react-redux';

import BankApp from "./container/BankApp";
import Login from './container/Login';
import Logout from './container/Logout';
import PrivateRoute from './components/PrivateRoute';
import Public from './components/Public';

class Authentication extends Component {
  render() { 
    const { isLogged } = this.props;
    return (  
      <Router>
        <React.Fragment>
          <Logout />
          <ul>
            <li>
              <Link to="/public">Public Page</Link>
            </li>
            <li>
              <Link to="/protected">Protected Page</Link>
            </li>
          </ul>
          <Route path="/public" component={Public} />

          <Route path="/login" component={Login} />
          <PrivateRoute
            path="/protected"
            isLogged={isLogged}
            component={() => <BankApp />}
          />
        </React.Fragment>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
      isLogged: state.isLogged
  }
};

export default connect(
  mapStateToProps
)(Authentication);
