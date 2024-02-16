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
      <div className="input_container">
        <label
          htmlFor={placeholder}
          className={isLabelVisible ? "label-text" : "hidden label-text"}
        >
          {placeholder}
        </label>
        
        <input
          type={type}
          id={placeholder}
          name={placeholder}
          placeholder={placeholder}
          pattern={pattern}
          className="in-box"
          required
          onFocus={handleFocusIn}
          onBlur={handleFocusOut}
          autoComplete="off"
        />
        
      </div>
      {helperText !== "" && <div className="spec">{helperText}</div>}
    </div>
      
  );
}

export default Input;
