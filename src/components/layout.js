import React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";

export default ({ children }) => (
  <div>
    <Link to="/">
      <h3>Reading List</h3>
    </Link>
    <Navbar />
    {children}
  </div>
);
