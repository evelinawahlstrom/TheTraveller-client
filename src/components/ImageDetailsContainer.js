import React from "react";
import { connect } from "react-redux";
import { loadImage, createDescription } from "../actions/images"
import ImageDetails from './ImageDetails'

class ImageDetailsContainer extends React.Component {
    componentDidMount() {
      console.log(this.props.match, "WHAT IS THIS.PROPS.MATCH??")
      this.props.loadImage(Number(this.props.match.params.id));
    }

    state = {
      text: "",
    }

  onChange = event => {
      this.setState({
          [event.target.name]: event.target.value
      })
  }
  onSubmit = event => {
    event.preventDefault();
    this.props.createDescription({
        ...this.state,
        imageId: this.props.imageId
    });
    this.setState({
        text: "",
    })
}
    render() {
      return (
        <ImageDetails 
        image={this.props.image}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}/>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      image: state.image,
      imageId: state.image.id
    }
  }
  
  const mapDispatchToProps = { loadImage, createDescription }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ImageDetailsContainer);