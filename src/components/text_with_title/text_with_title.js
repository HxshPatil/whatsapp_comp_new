import React from "react";
import "./text_with_title.css";

function TextWithTitle({ content }) {
  const handleClick = (data) => {
    console.log(data);
    alert(data.id);
  };

  function findIndex(content) {
    for (let i = 0; i < content.template.components.length; i++) {
      if (content.template.components[i].type === "BODY") {
        return i;
      } else {
        continue;
      }
    }
  }

  let index = findIndex(content);
  return (
    <div
      className="text-with-title-container"
      onClick={() => handleClick(content)}
    >
      <div className="title  text-sm--sb">{content.template.name}</div>
      <div className="text text-sm ">
        {content.template.components[index].text}
      </div>
    </div>
  );
}

export default TextWithTitle;
