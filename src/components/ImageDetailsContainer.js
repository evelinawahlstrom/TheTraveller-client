import React from "react";
import { connect } from "react-redux";
import { loadImage, loadImageBoard } from "../actions/images"
import ImageDetails from './ImageDetails'

class ImageDetailsContainer extends React.Component {
    componentDidMount() {
      console.log(this.props.match, "WHAT IS THIS.PROPS.MATCH??")
      this.props.loadImage(Number(this.props.match.params.id));
    }
  
    render() {
      return (
        <div>
        <ImageDetails image={this.props.image}/>
        </div>
      );
    }
  }
  
  const mapStateToProps = state => {
    return {
      image: state.image,
    }
  }
  
  const mapDispatchToProps = { loadImage, loadImageBoard }
  
  export default connect(
    mapStateToProps, mapDispatchToProps
  )(ImageDetailsContainer);