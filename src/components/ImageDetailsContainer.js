import React from "react";
import Button from '@material-ui/core/Button';
import { connect } from "react-redux";
import { loadImage, deleteImage } from "../actions/images"
import { editDescription } from "../actions/description"
import ImageDetails from './ImageDetails'
import CreateDescriptionContainer from './CreateDescriptionContainer'

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
    this.props.editDescription(this.props.description);
    this.setState({
        editMode: false
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
        {this.state.editMode === false ?
        <div> 
        <ImageDetails 
        image={this.props.image}
        text={this.props.description}
        values={this.state}
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        onClick={this.onClick}/>
        </div>
      : <ImageDetails
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state} />}
        </div>);
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
  
  const mapDispatchToProps = { loadImage, deleteImage, editDescription }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ImageDetailsContainer);