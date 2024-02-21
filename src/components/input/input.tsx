import React, { useState, FC, FocusEvent } from "react";
import "./input.sass";

interface InputProps {
  helperText?: string;
  pattern?: string;
  inputType?: string;
  placeholder?: string;
}

const Input3: FC<InputProps> = ({
  helperText,
  pattern,
  inputType,
  placeholder,
}) => {
  const [isLabelVisible, setIsLabelVisible] = useState<boolean>(false);

  const handleFocusIn = (): void => {
    setIsLabelVisible(true);
  };

  const handleFocusOut = (e: FocusEvent<HTMLInputElement>): void => {
    if (e.target.value === "") {
      setIsLabelVisible(false);
    }
  };

  return (
    <div className="input-wrapper">
      <div className="input-container">
        <label
          htmlFor={placeholder}
          className={
            isLabelVisible ? "label-text text-md" : "hidden label-text text-md"
          }
        >
          {placeholder}
        </label>

        <input
          role="input"
          type={inputType}
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
};

export default Input3;
