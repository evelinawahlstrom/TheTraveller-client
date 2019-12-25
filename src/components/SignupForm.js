import React from "react";

export default props => {
  return (
    <div className="add-form">
    <form
    onSubmit={props.onSubmit}>
      <input
        name="email"
        value={props.values.email}
        onChange={props.onChange}
        placeholder="email"
        className="form-control mb-1 w-50"
      />
      <input
        name="password"
        value={props.values.password}
        type="password"
        onChange={props.onChange}
        placeholder="password"
        className="form-control mb-1 w-50"
      />
      <button type="submit" className="btn btn-danger w-30"> Signup</button>
    </form>
    </div>
  );
};