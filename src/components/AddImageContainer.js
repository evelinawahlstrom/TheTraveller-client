import React from "react";
import { connect } from "react-redux";
import { createImage } from "../actions/images";
import ImageForm from "../components/ImageForm"

class AddImageContainer extends React.Component {

  state = {
    name: "",
    picture: "",
  };

  onSubmit = event => {
    // console.log(this.state)
    event.preventDefault();
    this.props.createImage(this.state);
    this.setState({
      name: "",
      picture: ""
    });
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <ImageForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

/// no mapStateToProps, because we just have a local state here...

export default connect(
  null,
  { createImage }
)(AddImageContainer);