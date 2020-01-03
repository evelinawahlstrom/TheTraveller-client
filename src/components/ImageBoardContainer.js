import React, { Component } from 'react'
import { connect } from "react-redux";
import { loadImageBoard } from '../actions/images'
import ImageBoard from './ImageBoard'

class ImageBoardContainer extends Component {
componentDidMount() {
    this.props.loadImageBoard();
}
render() {
    console.log(this.props);
    return (
      <div>
        <ImageBoard images={this.props.images} />
        {this.props.loggedIn ? (
        <b>Image Board</b>
        ) : (
          <div className="links">
          <br/>
          <h3><i>Please login to see Image Board</i></h3></div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
    console.log(state, "reduxstate"); 
    // check what the reduxstate is
    return {
      images: state.images,
      loggedIn: state.auth !== null
    };
}

export default connect(
    mapStateToProps,
    { loadImageBoard }
  )(ImageBoardContainer);