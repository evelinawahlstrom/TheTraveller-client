  import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { logout } from '../actions/auth'

class Logout extends Component {
    componentDidMount() {
        this.props.logout();
      }

    render() {
      return(
          <div>
          <button
              onClick={this.props.logout()}
            >
            </button>
          </div>
      )
    }
  }


function mapStateToProps (state) {
  console.log("mstp", state)
  return {
      token: state.auth
  }
}

export default connect(mapStateToProps,{ logout })(Logout);