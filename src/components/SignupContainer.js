import 'bootstrap/dist/css/bootstrap.css'
import React, { Component } from 'react'
import * as request from 'superagent'
import { url } from '../url'
import { Link } from 'react-router-dom';
import SignupForm from './SignupForm'

export default class SignupContainer extends Component {
    state = {
        email: "",
        password: ""
    }

    onChange = event => {
        this.setState({
          [event.target.name]: event.target.value
        });
      };

    onSubmit = (event) => {
        event.preventDefault()
        console.log("try to signup w: ", this.state.email, "and", this.state.password)
        request.post(`${url}/signup`)
            .send({
                email: this.state.email,
                password: this.state.password
            })
            .catch(err => console.log(err))
        this.setState({
            email: "",
            password: ""
        })
    }

    render() {
        return (
            <div>
            <SignupForm
            onSubmit={this.onSubmit}
            onChange={this.onChange}
            values={this.state}/>
            </div>
        )
    }
}
