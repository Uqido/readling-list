import React from "react";
import { Link } from "gatsby";
import styles from "./navbar.module.css";

const ListLink = props => (
  <li className={styles.menuItem}>
    <Link to={props.to}>{props.children}</Link>
  </li>
);

export default () => (
  <ul className={styles.menu}>
    <ListLink to="/about/">About</ListLink>
    <ListLink to="/submit/">Submit Article</ListLink>
  </ul>
);
