import React from "react";
import Navbar from "../components/navbar";
import styles from "./layout.module.css";

export default ({ children }) => (
  <div className={styles.container}>
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
