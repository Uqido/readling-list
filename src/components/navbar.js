import React from "react";
import { Link } from "gatsby";

const ListLink = props => (
    <li>
        <Link to={props.to}>{props.children}</Link>
    </li>
)


export default () => (
  <div>
    <ul>
      <ListLink to="/">Home</ListLink>
      <ListLink to="/about/">About</ListLink>
      <ListLink to="/submit/">Submit Article</ListLink>
    </ul>
  </div>
);
