import React from "react";

export default props => (
  <div>
    <h3>{props.title}</h3>
    <small>{props.date}</small>
    <p>{props.description}</p>
  </div>
);
