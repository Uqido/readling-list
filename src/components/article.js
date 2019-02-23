import React from "react";
import styles from "./article.module.css";
import { Link } from "gatsby";

export default props => (
  <div>
    <Link to={props.url}>
      <h3 className={styles.title}>{props.title}</h3>
    </Link>
    <small>{props.date}</small>
    <p className={styles.description}>{props.description}</p>
  </div>
);
