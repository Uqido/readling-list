import React from "react";
import { Link } from "gatsby";
import Navbar from "../components/navbar";
import styles from "./layout.module.css";

export default ({ children }) => (
  <div className={styles.container}>
    <div className={styles.header}>
      <Link to="/">
        <h3 className={styles.title}>Reading List</h3>
      </Link>
      <Navbar />
    </div>
    {children}
  </div>
);
