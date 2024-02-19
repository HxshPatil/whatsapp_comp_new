import React from "react";
import "./text_with_title.css";

function TextWithTitle({ content }) {

  return (
    <div className="text-with-title-container">
      <div className="title  text-sm--sb">
        {content.title}
      </div>
      <div className="text text-sm ">{content.text}</div>
    </div>
  );
}

export default TextWithTitle;
