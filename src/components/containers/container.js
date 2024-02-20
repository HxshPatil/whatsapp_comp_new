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



{/* <Container
  leftHeader={
    <Header
      title={"General"}
      text={"Select the General settings for the template"}
    />
  }
  right_header={<button>click</button>}
  content={
    <>
      <Input
        helperText={"password input field"}
        pattern={
          "^([A-Za-z]{1,20})([ ]{0,1})([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})$"
        }
        type={"text"}
        placeholder={"broadcast name"}
      />
    </>
  }
/>; */}
