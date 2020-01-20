import React from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { loadImage, createDescription, deleteImage } from "../actions/images"
import { editDescription } from "../actions/description"
import ImageDetails from './ImageDetails'
import EditDescription from './EditDescription'

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

onEdit = () => {
  this.setState({
    editMode: true
  });
};


onClick = (imageId) => {
  this.props.deleteImage(imageId)
  this.props.history.push(`/images`)
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
        {this.state.editMode ? (
          <EditDescription />
        ) : (
          <Button onClick={this.onEdit} type="submit" color="primary">Edit</Button>
        )}
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
  
  const mapDispatchToProps = { loadImage, createDescription, deleteImage, editDescription }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ImageDetailsContainer);