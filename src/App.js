import React, { useState } from "react";
import "./App.css";
import TextWithTitle from "./components/text_with_title/text_with_title";
import Input from "./components/input/input";
import Container from "./components/containers/container";
import Header from "./components/header/header";

function App() {
  const [contentList, setContentList] = useState([
    {
      title: "abandonment",
      text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    },
    {
      title: "csdb_automation_template_2",
      text: "Hello {{Info.First Name}} I am reaching out to you {{Info.First Name}}.Let us know incase you have further queries.",
    },
    {
      title: "abandonment",
      text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    },
    {
      title: "csdb_automation_template_2",
      text: "Hello {{Info.First Name}} I am reaching out to you {{Info.First Name}}.Let us know incase you have further queries.",
    },
  ]);

  // const addContent = () => {
  //   setContentList([
  //     ...contentList,
  //     {
  //       title: "csdb_automation_template_2",
  //       text: "Hello {{Info.First Name}} I am reaching out to you {{Info.First Name}}.Let us know incase you have further queries.",
  //     },
  //   ]);
  // };

  return (
    <div className="App">
      {/* <button onClick={addContent}>Add Content</button> */}
      <div className="box-container">
        {contentList.map((content, index) => (
          <TextWithTitle key={index} content={content} />
        ))}
      </div>
      <div className="containers-container">
        <Container
          left_header={
            <Header
              title={"General"}
              text={"select the General settings for the template"}
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
                type={"password"}
                placeholder={"password"}
              />
              <Input
                // helperText={
                //   "Name can only contain lowercase, numbers & underscore"
                // }
                pattern={"^([A-Za-z]{1,5})$"}
                type={"text"}
                placeholder={"name"}
              />
            </>
          }
        />

        <Container
          left_header={<Header title={"General"} />}
          // right_header={"helloknsjsn"}
          content={
            <>
              <Input
                helperText={
                  "Template name can only contain lowercase, numbers & underscore"
                }
                pattern={
                  "^([A-Za-z]{1,20})([ ]{0,1})([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})$"
                }
                type={"text"}
                placeholder={"template name"}
              />
              <Input
                helperText={
                  "Name can only contain lowercase, numbers & underscore"
                }
                pattern={
                  "^([A-Za-z]{1,20})([ ]{0,1})([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})$"
                }
                type={"text"}
                placeholder={"name"}
              />
            </>
          }
        />
      </div>
      {/* <Input_with_tag/> */}
    </div>
  );
}

export default App;
