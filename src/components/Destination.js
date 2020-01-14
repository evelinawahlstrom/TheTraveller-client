import React, { Component } from 'react'
import { connect } from "react-redux";
import { getWebcamTravel } from '../actions/api'

class Destination extends Component {
    componentDidMount() {
        this.props.getWebcamTravel();
      }
    render() {
        return (
            <div>
               hey 
            </div>
        )
    }
}

export default connect(
    null,
    { getWebcamTravel }
  )(Destination);