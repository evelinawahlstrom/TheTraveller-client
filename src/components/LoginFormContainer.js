import React from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions/auth";
import { Redirect } from "react-router-dom";
import * as request from 'superagent'
import {url} from '../url'

class LoginFormContainer extends React.Component {
    state = {
        email: "",
        password: ""
    }
eee
    onSubmit = (event) => {
        event.preventDefault()
        console.log("try to login w: ", this.state.email ,"and", this.state.password)
        this.props.login(this.state.email, this.state.password);
        request
        .post(`${url}/login`)
        .send({
            email: this.state.email,
            password: this.state.password
        })
        .then(result => {
            console.log("please let it be a token!", result.body)   
        this.props.login(result.body.jwt)
        }).catch(err => console.log(err))
        this.setState({
            email: "",
            password: ""
        })
    }

    onChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

  render() {
    return this.props.token ? (
      // If we have a token, redirect to images
      <Redirect to="/images" />
    ) : (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

function mapStateToProps (state) {
    console.log("mstp", state)
    return {
        token: state.auth
    }
}

export default connect(mapStateToProps, { login })(LoginFormContainer)
