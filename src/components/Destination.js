import React, { Component } from 'react'
import { connect } from "react-redux";
import { getWebcamTravel } from '../actions/api'
var request = require("request");

class Destination extends Component {
    onClick = (event) => {
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
    render() {
        return (
            <div>
               
            </div>
        )
    }
}

export default connect(
    null,
    { getWebcamTravel }
  )(Destination);