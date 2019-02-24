import React from "react";
import { Link } from "gatsby";

export default () => (
  <div className="row flex-center">
    <Link className="paper-btn margin" to="/">
      Home
    </Link>
    <Link className="paper-btn margin" to="/about/">
      About
    </Link>
    <Link className="paper-btn margin" to="/submit/">
      Submit Article
    </Link>
  </div>
);
