import React from "react";
import "./text_with_title.css";

function TextWithTitle({ content }) {

  return (
    <div className="text-with-title-container">
      <div className="title">
        <b>{content.title}</b>
      </div>
      <div className="text">{content.text}</div>
    </div>
  );
}

export default TextWithTitle;
