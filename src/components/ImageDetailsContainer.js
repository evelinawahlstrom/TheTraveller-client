import React from "react";
import { connect } from "react-redux";
import { loadImage, createDescription, deleteImage } from "../actions/images"
import { editDescription } from "../actions/description"
import ImageDetails from './ImageDetails'

class ImageDetailsContainer extends React.Component {
    componentDidMount() {
      console.log(this.props.match, "WHAT IS THIS.PROPS.MATCH??")
      this.props.loadImage(Number(this.props.match.params.id));
    }
    state = {
      text: "",
      editMode: false
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

  onEdit = () => {
    // intialize editing mode:
    // set the starting value of the fields to the event details
    this.setState({
      editMode: true,
      formValues: {
        text: this.props.description.text,
      }
    })
  }

  onEditChange = (event) => {
    // update the formValues property with the new data from the input field
    this.setState({
      formValues: {
        ...this.state.formValues,
        [event.target.name]: event.target.value
      }
    })
  }

  onEditSubmit = (event) => {
    event.preventDefault()
    this.setState({
      editMode: false
    })
    this.props.editDescription(this.props.description.id, this.state.formValues)
  }

    render() {
      return (
        <ImageDetails 
        image={this.props.image}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onClick={this.onClick}
        onEdit={this.onEdit}
        onEditChange={this.onEditChange}
        onEditSubmit={this.onEditSubmit}
        values={this.state}/>
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
  
  const mapDispatchToProps = { loadImage, createDescription, deleteImage, editDescription }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ImageDetailsContainer);