import React, { useState, useEffect, useRef } from "react";

interface InputProps {
  state?: "default" | "filled" | "focused" | "disabled";
  placeholder?: string;
  preFilledValue?: string;
  maxCharsLimit?: number;
  className?: string;
  isEmptyAllowed?: boolean;
  helperText?: string;
  pattern?: string;
  inputType?: "text" | "number";
  onChange?: (e: any) => void;
  [key: string]: any;
}

const Input: React.FC<InputProps> = ({
  state = "default",
  placeholder = "",
  preFilledValue = "",
  maxCharsLimit = 2,
  className = "Input",
  isEmptyAllowed = false,
  inputType = "text",
  helperText = "",
  pattern = "",
  ...rest
}) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [isLabelVisible, setIsLabelVisible] = useState<boolean>(false);

  const handleFocusIn = (): void => {
    setIsLabelVisible(true);
  };

  const handleFocusOut = (e: FocusEvent<HTMLInputElement>): void => {
    console.log(e.target.value);
    if (e.target.value === "") {
      setIsLabelVisible(false);
    }
  };

  useEffect(() => {
    const escapeFocus = (e: KeyboardEvent<HTMLInputElement>): void => {
      if (e.key === "Escape" || e.key === "Enter" || e.keyCode === 27) {
        if (inputRef.current) {
          if (e.target.value === "") {
            setIsLabelVisible(false);
          }
          inputRef.current.blur();
        }
      }
    };
    window && window.addEventListener("keydown", escapeFocus);
    return () => {
      window.removeEventListener("keydown", escapeFocus);
    };
  });

  const validateInputNumber = () => {
    return inputType === "number" && Number(preFilledValue) <= 0;
  };

  return (
    // <div>
    // <input
    //     ref={inputRef}
    //     role="input"
    //     className={`text-xs ${className} ${  validateInputNumber() || (isEmptyAllowed && preFilledValue.trim() === '') ? 'warning-empty-input' : '' }`}
    //     autoComplete="off"
    //     type={inputType}
    //     placeholder={placeholder}
    //     value={preFilledValue}
    //     data-state={state}
    //     disabled={state === "disabled"}
    //     maxLength={maxCharsLimit ? maxCharsLimit : undefined}
    //     {...rest}
    // />
    // </div>
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
          value={preFilledValue}
          disabled={state === "disabled"}
          data-state={state}
          maxLength={maxCharsLimit ? maxCharsLimit : undefined}
          id={placeholder}
          name={placeholder}
          placeholder={placeholder}
          pattern={pattern}
          className={`text-md in-box ${className} ${
            validateInputNumber() ||
            (isEmptyAllowed && preFilledValue.trim() === "")
              ? "warning-empty-input"
              : ""
          }`}
          required
          onFocus={handleFocusIn}
          ref={inputRef}
          autoComplete="off"
          {...rest}
        />
      </div>
      {helperText !== "" && <div className="spec text-sm">{helperText}</div>}
    </div>
  );
};

export default Input;

//state: "default" | "filled" | "focused" | "disabled"
