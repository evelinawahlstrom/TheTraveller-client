import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import React, {Component} from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import SignupContainer from './components/SignupContainer'

class App extends Component{
  render() {
    return (
        <div className="App-div">
          <h1>THE TRAVELLER</h1>
          <div className="links">
          <Link to="/signup"> Signup </Link>
          <Route path="/signup" exact component={SignupContainer} />
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