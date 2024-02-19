import React from "react";
import "./container.css";

function Container({ leftHeader, rightHeader, content }) {
  return (
    <div className="container">
      <div className="container-header">
        <div className="left-header">{leftHeader}</div>
        <div className="right-header">{rightHeader}</div>
      </div>
      <div className="container-content">{content}</div>
    </div>
  );
}

export default Container;
