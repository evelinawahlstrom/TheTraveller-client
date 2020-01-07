import React from "react";

export default function ImageDetails(props) {
  if (!props.image.id) return "Loading";
  console.log(props.image, "what is props.images??")
  return (
    <div className="list">
    <h4>{props.image.name}</h4>
    <br/>
    <img src={props.image.picture} 
    width="400" 
    height="400" 
    alt="profile-pic" />
    </div>
  );
}
