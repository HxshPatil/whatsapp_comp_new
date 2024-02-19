import React, { useState } from "react";
import "./input.css";

function Input({ helperText, pattern, type, placeholder }) {
  const [isLabelVisible, setIsLabelVisible] = useState(false);

  const handleFocusIn = () => {
    setIsLabelVisible(true);
    console.log("1  1");
  };

  const handleFocusOut = (e) => {
    if (e.target.value === "") {
      setIsLabelVisible(false);
    }
  };

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <label
          htmlFor={placeholder}
          className={isLabelVisible ? "label-text text-md" : "hidden label-text text-md"}
        >
          {placeholder}
        </label>

        <input
          type={type}
          id={placeholder}
          name={placeholder}
          placeholder={placeholder}
          pattern={pattern}
          className="in-box text-md"
          required
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          autoComplete="off"
        />
      </div>
      {helperText !== "" && <div className="spec text-sm">{helperText}</div>}
    </div>
  );
}

export default Input;
