import BankAppContainer from "./BankAppContainer";
import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Link
} from "react-router-dom";
import PropTypes from "prop-types";

import Login from './container/Login';
import AuthButton from './components/AuthButton';
import PrivateRoute from './components/PrivateRoute';
import Public from './components/Public';
// import Protected from './components/Protected';

////////////////////////////////////////////////////////////
// 1. Click the public page
// 2. Click the protected page
// 3. Log in
// 4. Click the back button, note the URL each time

const Authentication = () => (
  <Router>
    <React.Fragment>
      <AuthButton />
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
        component={render => <BankAppContainer />}
      />
    </React.Fragment>
  </Router>
);



// const AuthButton = withRouter(
//   ({ history }) =>
//     fakeAuth.isAuthenticated ? (
//       <p>
//         Welcome!{" "}
//         <button
//           onClick={() => {
//             fakeAuth.signout(() => history.push("/"));
//           }}
//         >
//           Sign out
//         </button>
//       </p>
//     ) : (
//       <p>You are not logged in.</p>
//     )
// );

Authentication.propTypes = {
  onAuthentication: PropTypes.func
};

export default Authentication;
