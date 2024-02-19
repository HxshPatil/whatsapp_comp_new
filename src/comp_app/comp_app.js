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
      text: "Aello {{Info.First Name}} I am reaching out to you {{Info.First Name}}.Let us know incase you have further queries.",
    },
    // {
    //   id: 3,
    //   title: "abandonment",
    //   text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    // },
    // {
    //   id: 4,
    //   title: "abandonment",
    //   text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    // },
    // {
    //   id: 5,
    //   title: "abandonment",
    //   text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
    // },
    {
      id: 6,
      title: "New collection",
      text: "Hey [customer name] the wait 🕜 is finally over! We know you wanted you to be the first to hear about our spring collection 🏃🏻‍♀️🏃🏽‍♂️ Check it out here! [URL].",
    },
    {
      title: "Restock available",
      text: "As promised, [customer name], you’re the first to know that [item] is back in stock 🥳 Get it immediately at [URL] or visit any of our retail outlets 🏢 We’re located at: [list of outlets]. Let us know if we can reserve one in-store for you!",
      id: 7,
    },
    {
      title: "Loyalty reward",
      text: "Dear [customer name], thank you for being a loyal member of [brand name] 🙏 Here’s an exclusive 10% off our new collection with the promo code 10TQ. There’s also a free gift 🎁 for orders above [amount] as a token of our appreciation. Shop now at [URL].",
      id: 8,
    },
    {
      title: "Re-engagement",
      text: "It’s been a while, [customer name] 👋 Since your last visit, we have expanded our products and services to provide the best wellness experience around. Why not drop by for a yoga 🧘 class or a matcha 🍵 tasting session? Reserve your workshop of choice at [URL]. We hope to see you!",
      id: 9,
    },
    // { title: "GMC", text: "Sonoma Club Coupe", id: 10 },
  ]);

  const [search, setSearch] = useState("");
  return (
    <div className="complete-wrapper">
      <div className="navbar-dummy">navbar component to be imported</div>
      <div className="page-wrapper">
        <div className="components-container">
          <div className="box-container">
            <div className="boxA-header">
              <Text textboxText={"Broadcast details"} />
            </div>
            <div className="boxA-content">
              <Container
                leftHeader={
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
                leftHeader={
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
                leftHeader={
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
              <Text textboxText={"Template details"} />
            </div>

            <div className="boxB-content">
              <form>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="searchbar to be imported"
                ></input>
              </form>
              {/* <div>search box to be imported</div> */}
              <div className="content-wrapper">
              {contentList
                .filter((content) => {
                  // console.log(content.text.toLowerCase().includes(search.toLowerCase()) , '********',content.title.toLowerCase().includes(search.toLowerCase()));
                  return search.toLowerCase() === ""
                    ? content
                    : content.text
                        .toLowerCase()
                        .includes(search.toLowerCase()) ||
                        content.title
                          .toLowerCase()
                          .includes(search.toLowerCase());
                })
                .map((content) => (
                  <TextWithTitle key={content.id} content={content} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Comp_app;
