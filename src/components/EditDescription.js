import React, { Component } from "react";
import { connect } from "react-redux";
import { editDescription } from "../actions/description";
import ImageDetails from "./ImageDetails"

class EditDescription extends Component {
  state = {
    text: this.props.description
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.editDescription(this.props.description.id, this.state);
  };

  render() {
    console.log("PROPS IN EDIT", this.props);
    console.log("STATE IN EDIT", this.state);
    return (
      <form onSubmit={this.onSubmit}>
      <input 
      value={this.state.text} 
      name="text" 
      onChange={this.onChange} />
      <input type="submit" />
    </form>
    );
  }
}

const mapStateToProps = state => ({
  description: state.description.id
});

const mapDispatchToProps = { editDescription };

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditDescription);