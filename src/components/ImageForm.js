import React from "react";

export default function (props) {
  return (
  <div className="form">
  <form onSubmit={props.onSubmit}>
      <input 
      type= "text"
      name="name"
      value={props.values.name} 
      onChange={props.onChange}
      placeholder="Name"/>
      <input 
      type= "text"
      name="picture"
      value={props.values.picture} 
      onChange={props.onChange}
      placeholder="Picture"/>
      <button type="submit" className="btn btn-danger w-30"> Add Image</button>
    </form>
    </div>
  );
}