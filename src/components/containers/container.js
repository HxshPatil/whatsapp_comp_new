import React from "react";
import "./container.css";

function Container({ leftHeader, rightHeader, content }) {
  return (
    <div className="container">
      <div className="container-header">
        <div className="left_header">{leftHeader}</div>
        <div className="right_header">{rightHeader}</div>
      </div>
      <div className="container-content">{content}</div>
    </div>
  );
}

export default Container;
