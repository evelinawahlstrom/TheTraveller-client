  import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom'
import { logout } from '../actions/auth'

class Logout extends Component {
    state = { navigate: false }

  handleLogOut = () => {
    this.props.logout();
    localStorage.clear("auth");
    this.setState({ navigate: true });
  };

    render() {
      if (this.state.navigate) {
        return <Redirect to="/" push={true}/>
      }
      return(
          <div>
          <button
              className="btn btn-main"
              style={{ marginTop: "2rem" }}
              onClick={this.handleLogOut}
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