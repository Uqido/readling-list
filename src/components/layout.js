import React from "react";
import Navbar from "../components/navbar";
import styles from "./layout.module.css";
import Helmet from "react-helmet";

export default ({ children }) => (
  <div className={styles.container}>
    <Helmet>
      <meta charSet="utf-8" />
      <title>Reading List</title>
    </Helmet>
    <div className="row flex-center">
      <div className="text-center">
        <h1 className="margin-small">Reading List</h1>
        <h3 className="margin-small">Articles made simple.</h3>
      </div>
    </div>
    <Navbar />
    {children}
  </div>
);
