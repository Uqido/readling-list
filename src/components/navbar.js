import React from "react";
import { Link } from "gatsby";

export default () => (
  <div className="row flex-center margin-bottom-large">
    <Link className="paper-btn margin-right-small margin-left-none" to="/">
      Home
    </Link>
    <Link className="paper-btn margin-right-small margin-left-none" to="/about/">
      About
    </Link>
    <Link className="paper-btn margin-right-small margin-left-none" to="/submit/">
      Submit Article
    </Link>
  </div>
);
