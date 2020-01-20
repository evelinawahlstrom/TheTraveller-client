// import React from "react";
// import { connect } from "react-redux";
// import { editDescription } from "../actions/description";
// import ImageDetails from "../components/ImageDetails"


// class EditDescriptionContainer extends React.Component {
//     state = { editMode: false }

//     onEdit = () => {
//       // intialize editing mode, toggle the editMode
//       // set the starting value of the fields to the event details
//       this.setState({
//         editMode: true,
//         text: ""
//       })
//     }
  
//     // handle changes in the form-state
//     onChange = event => {
//         this.setState({
//             [event.target.name]: event.target.value
//         })
//     }
  
//     // updating the event (aka dispatching the action) + editMode = false
//     onSubmit = event => {
//       event.preventDefault()
//       this.setState({
//         editMode: false
//       })
//       this.props.editDescription(this.props.description.id)
//     }

//   render() {
//     return (
//           <div>
//           <ImageDetails/>
//           </div>
//     );
//   }
// }

// export default connect(
//   null,
//   { editDescription }
// )(EditDescriptionContainer);