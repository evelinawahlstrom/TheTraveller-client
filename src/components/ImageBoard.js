import React from "react";
import { Link } from "react-router-dom";

export default function ImageBoard(props) {
  if (!props.images) return "Loading";
  console.log(props.images, "what is props.images??")
  return (
    <div className="list">
      {props.images.map(image => {
        return (
          <Link to={`/images/${image.id}`}>
          <img src={image.picture} 
          width="200" 
          height="200" 
          alt="image-pic" />
          </Link>
        );
      })}
    </div>
  );
}
