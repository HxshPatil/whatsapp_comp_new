import React from "react";
import "./container.css";

function Container({ left_header, right_header, content }) {
  return (
    <div className="container">
      <div className="container-header">
        <div className="left_header">{left_header}</div>
        <div className="right_header">{right_header}</div>
      </div>
      <div className="container-content">{content}</div>
    </div>
  );
}

export default Container;
