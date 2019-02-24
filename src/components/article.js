import React from "react";

export default props => (
  <div className="card margin-bottom-large">
    <div className="card-header">
      <div className="row flex-edges margin-none">
        <span>{props.date}</span>
        <a href={props.url}>Read it!</a>
      </div>
    </div>
    <div className="card-body">
      <h4 className="card-title">{props.title}</h4>
      <h5>
        {props.categories.map((category, index) => (
          <span key={index} className="margin-right-small">
            {htmlToText(category.name)}
          </span>
        ))}
      </h5>
      <p className="card-text">{htmlToText(props.description)}</p>
    </div>
  </div>
);

// converts HTML to text using Javascript
function htmlToText(html) {
  if (typeof document !== "undefined") {
    const tempTag = document.createElement("div");
    tempTag.innerHTML = html;

    return tempTag.innerText;
  }

  return html;
}
