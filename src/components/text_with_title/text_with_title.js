import React from "react";
import "./text_with_title.css";

function Text_with_title({ content }) {

  return (
    <div className="text_with_title_container">
      <div className="title">
        <b>{content.title}</b>
      </div>
      <div className="text">{content.text}</div>
    </div>
  );
}

export default Text_with_title;
