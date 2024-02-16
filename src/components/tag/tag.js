import React from "react";
import "./tag.css";

function Tag({ name }) {
  return (
    <div className="tag">
      <div className="tag-content">{name}</div>
      <div className="cancel-icon">
        <svg
          width="8"
          height="8"
          viewBox="0 0 8 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M7 1L1 7M1 1L7 7"
            stroke="#98A2B3"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}

export default Tag;
