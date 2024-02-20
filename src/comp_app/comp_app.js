import React, { useState } from "react";
import "./comp_app.css";
import TextWithTitle from "../components/text_with_title/text_with_title";
import Input from "../components/input/input";
import Container from "../components/containers/container";
import Header from "../components/header/header";
import Text from "../components/text/text";

function CompApp() {
  const contentList = [
    {
      id: 1,
      template: {
        name: "abandonment",
        components: [
          {
            type: "HEADER",
            text: "Dear [customer name], thank you for being a loyal member of [brand name] 🙏 Here’s an exclusive 10% off our new collection with the promo code 10TQ. There’s also a free gift 🎁 for orders above [amount] as a token of our appreciation. Shop now at [URL].",
          },
          {
            type: "BODY",
            text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
          },
        ],
      },
    },
    {
      id: 2,
      template: {
        name: "csdb_automation_template_2",
        components: [
          {
            type: "HEADER",
            text: "Aello {{Info.First Name}} I am reaching out to you {{Info.First Name}}.Let us know incase you have further queries.",
          },
          {
            type: "BODY",
            text: "Hello {{Info.First Name}} I am reaching out to you {{Info.First Name}}.Let us know incase you have further queries.",
          },
        ],
      },
    },
    {
      id: 3,
      template: {
        name: "Re-engagement",
        components: [
          {
            type: "HEADER",
            text: "Hi {{Info.First Name}}, 🛒Looks like you left something in your cart. We wanted to make sure youhad the chance to get what you needed. Get Flat 20% off on all purchases. UseCODE : CART20 Hurry! Only valid for 24 Hours⏰⏰ To unsubscribe from messages, please type STOP.",
          },
          {
            type: "BODY",
            text: "It’s been a while, [customer name] 👋 Since your last visit, we have expanded our products and services to provide the best wellness experience around. Why not drop by for a yoga 🧘 class or a matcha 🍵 tasting session? Reserve your workshop of choice at [URL]. We hope to see you!",
          },
        ],
      },
    },
    {
      id: 4,
      template: {
        name: "seasonal_promotion",
        language: "en_US",
        category: "MARKETING",
        components: [
          {
            type: "HEADER",
            format: "TEXT",
            text: "Our {{1}} is on!",
            example: {
              header_text: ["Summer Sale"],
            },
          },
          {
            type: "BODY",
            text: "Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
            example: {
              body_text: [["the end of August", "25OFF", "25%"]],
            },
          },
          {
            type: "FOOTER",
            text: "Use the buttons below to manage your marketing subscriptions",
          },
          {
            type: "BUTTONS",
            buttons: [
              {
                type: "QUICK_REPLY",
                text: "Unsubscribe from Promos",
              },
              {
                type: "QUICK_REPLY",
                text: "Unsubscribe from All",
              },
            ],
          },
        ],
      },
    },
    {
      id: 5,
      template: {
        name: "Valentine's day Sale",
        language: "en_US",
        category: "MARKETING",
        components: [
          {
            type: "HEADER",
            format: "TEXT",
            text: "Our {{1}} is on!",
            example: {
              header_text: ["Summer Sale"],
            },
          },
          {
            type: "BODY",
            text: "Give them the love they deserve. Shop now through {{1}} and use code {{2}} to get {{3}} off of all merchandise.",
            example: {
              body_text: [["the end of August", "25OFF", "25%"]],
            },
          },
          {
            type: "FOOTER",
            text: "Use the buttons below to manage your marketing subscriptions",
          },
          {
            type: "BUTTONS",
            buttons: [
              {
                type: "QUICK_REPLY",
                text: "Unsubscribe from Promos",
              },
              {
                type: "QUICK_REPLY",
                text: "Unsubscribe from All",
              },
            ],
          },
        ],
      },
    },
  ];

  const [search, setSearch] = useState("");
  return (
    <div className="complete-wrapper">
      <div className="navbar-dummy">navbar component to be imported</div>
      <div className="page-wrapper">
        <div className="components-container">
          <div className="box-container">
            <div className="box-a-header">
              <Text textboxText={"Broadcast details"} />
            </div>
            <div className="box-a-content">
              <Container
                leftHeader={
                  <Header
                    title={"General"}
                    text={"Select the General settings for the template"}
                  />
                }
                content={
                  <>
                    <Input type={"text"} placeholder={"Broadcast name"} />
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
                content={<>dropdown to be imported</>}
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
                content={<>date and time picker to be imported</>}
              />
            </div>
          </div>

          <div className="box-container">
            <div className="box-b-header">
              <Text textboxText={"Template details"} />
            </div>

            <div className="box-b-content">
              <form>
                <input
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder="searchbar to be imported"
                ></input>
              </form>
              <div className="content-wrapper">
                {contentList
                  .filter((content) => {
                    return search.toLowerCase() === ""
                      ? content
                      : content.template.name
                          .toLowerCase()
                          .includes(search.toLowerCase()) ||
                          content.template.components[1].text
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

export default CompApp;

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
// {
//   id: 6,
//   title: "New collection",
//   text: "Hey [customer name] the wait 🕜 is finally over! We know you wanted you to be the first to hear about our spring collection 🏃🏻‍♀️🏃🏽‍♂️ Check it out here! [URL].",
// },
// {
//   title: "Restock available",
//   text: "As promised, [customer name], you’re the first to know that [item] is back in stock 🥳 Get it immediately at [URL] or visit any of our retail outlets 🏢 We’re located at: [list of outlets]. Let us know if we can reserve one in-store for you!",
//   id: 7,
// },
// {
//   title: "Loyalty reward",
//   text: "Dear [customer name], thank you for being a loyal member of [brand name] 🙏 Here’s an exclusive 10% off our new collection with the promo code 10TQ. There’s also a free gift 🎁 for orders above [amount] as a token of our appreciation. Shop now at [URL].",
//   id: 8,
// },
// {
//   title: "Re-engagement",
//   text: "It’s been a while, [customer name] 👋 Since your last visit, we have expanded our products and services to provide the best wellness experience around. Why not drop by for a yoga 🧘 class or a matcha 🍵 tasting session? Reserve your workshop of choice at [URL]. We hope to see you!",
//   id: 9,
// },
