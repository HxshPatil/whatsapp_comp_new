import React, { useState } from "react";
import "./comp_app.css";
import TextWithTitle from "../components/text_with_title/text_with_title";
import Input from "../components/input/input";
import Container from "../components/containers/container";
import Header from "../components/header/header";
import Text from "../components/text/text";

function Comp_app() {
  const [contentList, setContentList] = useState([
    {
      id: 1,
      title: "abandonment",
      text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    },
    {
      id: 2,
      title: "csdb_automation_template_2",
      text: "Hello {{Info.First Name}} I am reaching out to you {{Info.First Name}}.Let us know incase you have further queries.",
    },
    {
      id: 3,
      title: "abandonment",
      text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    },
    {
      id: 4,
      title: "abandonment",
      text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    },
    {
      id: 5,
      title: "abandonment",
      text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    },
    {
      id: 6,
      title: "abandonment",
      text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    },
    // { title: "Nissan", text: "Frontier", id: 7 },
    // { title: "Mitsubishi", text: "Galant", id: 8 },
    // { title: "Volkswagen", text: "Golf III", id: 9 },
    // { title: "GMC", text: "Sonoma Club Coupe", id: 10 },
  ]);

  const [search, setSearch] = useState("");
  return (
    <div>
      <div className="navbar-dummy">navbar component to be imported</div>
      <div className="page-wrapper">
        <div className="components-container">
          <div className="box-container">
            <div className="boxA-header">
              <Text textbox_text={"Broadcast details"} />
            </div>
            <div className="boxA-content">
              <Container
                left_header={
                  <Header
                    title={"General"}
                    text={"Select the General settings for the template"}
                  />
                }
                //   right_header={<button>click</button>}
                content={
                  <>
                    <Input
                      // helperText={"password input field"}
                      // pattern={
                      //   "^([A-Za-z]{1,20})([ ]{0,1})([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})$"
                      // }
                      type={"text"}
                      placeholder={"broadcast name"}
                    />
                  </>
                }
              />
              <Container
                left_header={
                  <Header
                    title={"Targeting"}
                    text={"Select who you want to send the Broadcast to"}
                  />
                }
                //   right_header={<button>click</button>}
                content={
                  <>
                    {/* <Input
                    helperText={"password input field"}
                    pattern={
                      "^([A-Za-z]{1,20})([ ]{0,1})([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})$"
                    }
                    type={"text"}
                    placeholder={"broadcast name"}
                  /> */}
                    dropdown to be imported
                  </>
                }
              />
              <Container
                left_header={
                  <Header
                    title={"Schedule Broadcast"}
                    text={
                      "Set the Date and Time when you want to send the Broadcast"
                    }
                  />
                }
                //   right_header={<button>click</button>}
                content={
                  <>
                    {/* <Input
                    // helperText={"password input field"}
                    // pattern={
                    //   "^([A-Za-z]{1,20})([ ]{0,1})([A-Za-z]{1,20})?([ ]{0,1})?([A-Za-z]{1,20})$"
                    // }
                    type={"text"}
                    placeholder={"broadcast name"}
                  /> */}
                    date and time picker to be imported
                  </>
                }
              />
            </div>
          </div>

          <div className="box-container">
            <div className="boxB-header">
              <Text textbox_text={"Template details"} />
            </div>
            {/* <form>
            <input onChange={(e) => setSearch(e.target.value)}></input>
            </form> */}
            <div className="boxB-content">
              {contentList
                .filter((content) => {
                  return search.toLowerCase() === ""
                    ? content
                    : content.text.toLowerCase().includes(search) ||
                        content.title.toLowerCase().includes(search);
                })
                .map((content) => (
                  <TextWithTitle key={content.id} content={content} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp_app;
