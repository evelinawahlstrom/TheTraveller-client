import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import SignupContainer from './components/SignupContainer'
import LoginFormContainer from './components/LoginFormContainer'

class App extends Component{
  render() {
    return (
        <div className="Title">
          <h1>THE TRAVELLER</h1>
          <div className="links">
          <Link to="/signup"> Signup </Link>
          <Link to="/login"> Login </Link>
          <Route path="/signup" exact component={SignupContainer} />
          <Route path="/login" exact component={LoginFormContainer} />
          </div>
      </div>
    );
  }
}

// reduxstate
const mapStateToProps = state => {
  return {
    loggedIn: state.auth !== null
  };
};

export default connect(mapStateToProps)(App);