import React from "react";

export default props => (
  <div style={{ display: "flex", justifyContent: "center" }}>
    <button onClick={props.onDelete}>x</button>
    <div>{props.text}</div>
  </div>
);
