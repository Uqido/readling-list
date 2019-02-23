import React from "react";
import styles from "./article.module.css";

export default props => (
  <div>
    <a href={props.url}>
      <h3 className={styles.title}>{props.title}</h3>
    </a>
    <small>{props.date}</small>
    <p className={styles.description}>{props.description}</p>
  </div>
);
