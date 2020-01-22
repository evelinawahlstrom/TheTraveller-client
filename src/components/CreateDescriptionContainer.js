import React from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { createDescription, loadImage } from "../actions/images"
import ImageDetails from './ImageDetails'

class CreateDescriptionContainer extends React.Component {
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
        <div>
        <ImageDetails 
        image={this.props.image}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onClick={this.onClick}
        values={this.state}
        />
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      image: state.image,
      imageId: state.image.id,
      images: state.images,
      description: state.description.id
    }
  }
  
  const mapDispatchToProps = { createDescription, loadImage }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(CreateDescriptionContainer);