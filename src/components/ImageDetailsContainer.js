import React from "react";
import { connect } from "react-redux";
import { loadImage, createDescription, deleteImage } from "../actions/images"
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

  onClick = (imageId) => {
  this.props.deleteImage(imageId)
  this.props.history.push(`/images`)
  }

    render() {
      return (
        <ImageDetails 
        image={this.props.image}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onClick={this.onClick}
        values={this.state}/>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      image: state.image,
      imageId: state.image.id,
      images: state.images
    }
  }
  
  const mapDispatchToProps = { loadImage, createDescription, deleteImage }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ImageDetailsContainer);