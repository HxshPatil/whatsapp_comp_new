import React, { useState } from "react";
import {
  Sidebar,
  Navbar,
  ProfileDropDown,
  Table,
  HTMLTableCell,
  NumFormatter,
  Badge,
  Button,
 SearchBarComponent,
 TableUtilBtn
 
} from "@attrybtech/attryb-ui";
import "./template.css";

function Template() {
  const [showProfile, setShowProfile] = useState(false);
  const [viewallFilterClickedState,  setViewallFilterClickedState] = useState(false);
  const [activeFilterClickedState,  setActiveFilterClickedState] = useState(false);
  const [inactiveFilterClickedState,  setInactiveClickedState] = useState(false);
  const [currentPage,  setCurrentPage] = useState(1);
  const[rowActiveItem,setRowActiveItem] = useState();
  const name = "Cristiano Ronaldo";
  const email = "cr7@gmail.com";
  const userImage = "";
  const organizationName = "";
  const attrybLogo = "/attryb-ui/assets/icons/navbar/attryb-logo.svg";

  // const navigate = useNavigate()
  const urlCallBack = (domain, url, openIn) => {
    if (!url) return;

    if (openIn == "redirect") {
      // navigate(url);
    } else {
      window.open(`${domain}${url}`, openIn, "noreferrer");
    }
  };

  const handleProfileToggle = () => {
    setShowProfile(!showProfile);
  };
  const hideProfileHandler = () => {
    setShowProfile(false);
  };
  const productsConfig = [
    {
      id: "94232b08-7d33-11ed-9f3b-00155d3e8ac7",
      domain: "https://personalization-demo.attryb.com",
    },
    {
      id: "942338b7-7d33-11ed-9f3b-00155d3e8ac7",
      domain: "https://alpha.attryb.com",
      active: true,
    },
  ];
  const signOutCallBack = () => {
    //logic of signOut
  };

  const handleSupportCallback = () => {
    window.open("https://attryb.com", "_blank");
  };

  const AggregateCampaignsDropdown= [
    {
      _id: 1,
      value: "Sample Option 1",
      callbackfunction: (event) => {
        event.stopPropagation();
        // Function implementation goes here
        console.log("You Clicked on Sample option 1");
      },
    },
    {
      _id: 2,
      value: "Sample Option 2",
      callbackfunction: (event) => {
        event.stopPropagation();
        // Function implementation goes here
        console.log("You Clicked on Sample option 2");
      },
    },

    {
      _id: 3,
      value: "Sample Option 3",
      callbackfunction: (event) => {
        event.stopPropagation();
        // Function implementation goes here
        console.log("You Clicked on Sample option 3");
      },
    },
    {
      _id: 4,
      value: "Sample Option 4",
      callbackfunction: (event) => {
        event.stopPropagation();
        // Function implementation goes here
        console.log("You Clicked on Sample option 4");
      },
    },
  ];

  const columns= [
    {
      key: "usecase",
      title: "Use Cases Name",
      // style: { width: 100 }, 
      style:{whiteSpace: "normal", maxWidth: "34.25rem", textAlign:"right"},
      clickable:false,
      render: (_, {usecase}) => (
        <>
          <HTMLTableCell icon={usecase.icon} header={usecase.header}  description={usecase.description} />
        </>
      )
    },
    {
      key: "type",
      title: "Type",
      // style: { width: 100 },
      style:{whiteSpace: "nowrap" , textAlign: "center"},
      headerStyle: { textAlign: "center"},
      render: (_, { type }) => (
        <>
          {type === 'Recommendation' ? (
            <Badge variant="purple" labelText={type} />
          ) : type === 'Discounts' ? (
            <Badge variant="indigo" labelText={type} />
          ) : type === 'Exit Intent Popup' ? (
            <Badge variant="pink" labelText={type} />
          ) : type === 'Signup Popup' ? (
            <Badge variant="orange" labelText={type} />
          ) : type === 'User Generated Content' ? (
            <Badge variant="blue-gray" labelText={type} />
          ) : type === 'Others' ? (
            <Badge variant="gray" labelText={type} />
          ) : type}
        </>
      )
    },
    {
      key: "status",
      title: "Status",
      style:{whiteSpace: "nowrap"},
    //   style: { width: 100 }, 
      render: (_, {status}) => (
        <>
          {
                status === "Active" ? (
                  <Badge variant="success" isDot={true} labelText={status} />
                ) : (
                  status === "Inactive" ? (
                    <Badge variant="danger" isDot={true} labelText={status} />
                  ) : (
                    status === "Scheduled" && (
                      <Badge variant="indigo" isDot={true} labelText={status} />
                    )
                  )
                )
          }
        </>
      )
    },
    {
      key: "assistedRevenue",
      title: "Assisted Revenue",
      style:{whiteSpace: "nowrap", textAlign: 'center'},
      sortingEnable: true,
      render: (_, {assistedRevenue}) => (
        <>
          <NumFormatter type="currency" variant="dollar" value_type="non_float" value={assistedRevenue} />
        </>
      )
  
    },
    {
      key: "averageOrderValue",
      title: "Average Order Value",
      // style: { width: 200 },  
      style:{whiteSpace: "nowrap"},
      sortingEnable: true,
      render: (_, {averageOrderValue}) => (
        <>
          <NumFormatter type="currency" variant="dollar" value_type="float" value={averageOrderValue} fractionDigits={1}/>
        </>
      )
    },
    {
      key: "valueConversionRate",
      title: "Conversion Rate",
    //   style: { width: 100 }, 
      style:{whiteSpace: "nowrap"},
      sortingEnable: true,
      render: (_, {valueConversionRate}) => (
        <>
          <NumFormatter type="percentage" value_type="float" value={valueConversionRate} fractionDigits={2} />
  
        </>
      )
    },
    {
      key: "",
      title: "",
      style:{whiteSpace: "nowrap"},
      render: (_, item) => {

        return (
          <>

            {/* <TableUtilBtn variant="edit" rowItem={item} dropdownItems={AggregateCampaignsDropdown}/> */}

          </>
        );
      }
    }
  ];


  const data = [
    {
      fullName: "Francisco Mendes",
      role: "Full Stack",
      tags: ["dev", "blogger"],
      status: "Scheduled",
      type: "Recommendation",
      clickable:false,
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/YouMightAlsoLikeIcon.svg",
        "header":"You Might Also Like",
        "description":"Personalized recommendations tailored to your preferences",
    },
      assistedRevenue: 1000,
      averageOrderValue: 32,
      valueConversionRate: 0.067,
    },
    {
      fullName: "Ricardo Malva",
      role: "Social Media Manager",
      tags: ["designer", "photographer", "Recommendation"],
      status: "Active",
      type: "Recommendation",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Frequently bought together icon.svg",
        "header":"Frequently Bought Together",
        "description":"Discover smart product combinations for a seamless shopping experience"
    },
      assistedRevenue: 2000,
      averageOrderValue: 45,
      valueConversionRate: 0.068,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Active",
      type: "Recommendation",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Time bound discount.svg",
        "header":"Wish Listed Products",
        "description":"Organize and track favorite items for future planning"
    },
      assistedRevenue: 3000,
      averageOrderValue: 14,
      valueConversionRate: 0.0757,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Active",
      type: "Recommendation",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Time bound discount.svg",
        "header":"Similar Products",
        "description":"Easily explore alternative choices closely related to your interests"
    },
      assistedRevenue: 4000,
      averageOrderValue: 45,
      valueConversionRate: 0.076,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Recommendation",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Time bound discount.svg",
        "header":"Discount Top Banner",
        "description":"Showcase irresistible offers to increase click-through rates and conversions"
    },
      assistedRevenue: 5000,
      averageOrderValue: 345,
      valueConversionRate: 0.045,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Time bound discount.svg",
        "header":"Discount Section",
        "description":"Boost sales by showcasing tempting discounts in a dedicated discount section has no value of the order and bla bla via"
    },
      assistedRevenue: 6000,
      averageOrderValue: 57,
      valueConversionRate: 0.043,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Subscribe to newsletter icon.svg",
        "header":"Discount Full Page Popup",
        "description":"Capture user interest with targeted pop-up offers"
    },
      assistedRevenue: 7000,
      averageOrderValue: 26,
      valueConversionRate: 0.07,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/similar products social media post-carousel icon.svg",
        "header":"Discount Side Popup",
        "description":"Capture user interest with targeted pop-up offers"
    },
      assistedRevenue: 8000,
      averageOrderValue: 26,
      valueConversionRate: 0.01,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Similar products icon.svg",
        "header":"Free Shipping Top Banner",
        "description":"Promote free shipping deals to reduce cart abandonment"
    },
      assistedRevenue: 9000,
      averageOrderValue: 26,
      valueConversionRate: 0.037,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Active",
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/similar products cart tips icon.svg",
        "header":"All Coupons on Checkout Page",
        "description":"Maximize conversions with easy access to all checkout page coupons"
    },
      assistedRevenue: 100000,
      averageOrderValue: 26,
      valueConversionRate: 0.0287,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Active", 
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/similar products all coupons icon.svg",
        "header":"Cart Tips",
        "description":"Offer helpful suggestions to optimize user's cart experience"
    },
      assistedRevenue: 11000,
      averageOrderValue: 26,
      valueConversionRate: 0.0387,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Active",
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Signup popup gamified icon.svg",
        "header":"Time-Bound Post-Purchase Discount",
        "description":"Stimulate impulse buying with exclusive deals available for a short duration"
    },
      assistedRevenue: 12000,
      averageOrderValue: 26,
      valueConversionRate: 0.0487,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Active",
      type: "Discounts",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Recently viewed icon.svg",
        "header":"Survey Exit",
        "description":"Gather valuable feedback by presenting relevant surveys upon exit intent"
    },
      assistedRevenue: 13000,
      averageOrderValue: 26,
      valueConversionRate: 0.06687,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Active",
      type: "Exit Intent Popup",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Free shipping banner icon.svg",
        "header":"Subscribe to Newsletter",
        "description":"Increase newsletter subscribers with persuasive subscription invitations"
    },
      assistedRevenue: 14000,
      averageOrderValue: 26,
      valueConversionRate: 0.0587,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Exit Intent Popup",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Discount popup signup side page icon.svg",
        "header":"Abandoned Cart Recovery",
        "description":"Present appealing offers to recover potential lost sales"
    },
      assistedRevenue: 15000,
      averageOrderValue: 26,
      valueConversionRate: 0.0487,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Exit Intent Popup",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Discount popup icon.svg",
        "header":"Gamified Signup Popup",
        "description":"Boost signups with a fun and interactive gamified popup"
    },
      assistedRevenue: 16000,
      averageOrderValue: 26,
      valueConversionRate: 0.043,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Signup Popup",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Discount banner Side Popup icon.svg",
        "header":"Signup Side Page Popup",
        "description":"Boost signups with eye-catching and interactive side page popups."
    },
      assistedRevenue: 16000,
      averageOrderValue: 26,
      valueConversionRate: 0.0187,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "Signup Popup",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Discount banner Section icon.svg",
        "header":"Social Media Post-Carousel",
        "description":"Amplify your social proof using a captivating post-carousel to enhance credibility"
    },
      assistedRevenue: 17000,
      averageOrderValue: 26,
      valueConversionRate: 0.057,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "User Generated Content",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Discount banner icon.svg",
        "header":"Social Media Post-Grid",
        "description":"Enable seamless shopping with an Instagram post-grid"
    },
      assistedRevenue: 18000,
      averageOrderValue: 26,
      valueConversionRate: 0.0487,
    },
    {
      fullName: "kartik",
      role: "DEV", 
      tags: ["ok"],
      status: "Inactive",
      type: "User Generated Content",
      usecase: {
        "icon": "/attryb-ui/assets/icons/table/use-case-icons/Cart rescue popup icon.svg",
        "header":"Product Display Ranking Algorithm",
        "description":"Display top-rated or best-selling items for easier choices"
    },
      assistedRevenue: 19000,
      averageOrderValue: 26,
      valueConversionRate: 0.0347,
    },
  ];


const handleClick = (e, item) => {
    console.log("You clicked on", item.usecase?.header);
    // if (item.usecase?.header === "Product Display Ranking Algorithm") {
    //   window.location.href = "https://www.google.com";
    // } else if (item.usecase?.header === "Social Media Post-Grid") {
    //   window.location.href = "https://www.wikipedia.org";
    // }
  };



  let limitRows=[
    // { _id: "1", value: "20", data: { data: "20" } },
    // { _id: "2", value: "30", data: { data: "30" } },
    // { _id: "3", value: "40", data: { data: "40" } }
  ]

  const onSelect = (item) => {
    setRowActiveItem(item)
  };
  const handleSorting = (e, column) => {
    // console.log('column:', column)
    // console.log('e:', e)
  };


  const handlefilterClickViewAll = () => {
    setActiveFilterClickedState(false);
    setInactiveClickedState(false);
    setViewallFilterClickedState(true);
    console.log("You clicked on the Viewall Filter!")
  }
  
  const handleFilterClickActive = () => {
    setViewallFilterClickedState(false);
    setInactiveClickedState(false);
    setActiveFilterClickedState(true);
    console.log("You clicked on the Active Filter!")
  }

  const handleFilterClickInactive = () => {
    setActiveFilterClickedState(false);
    setViewallFilterClickedState(false);
    setInactiveClickedState(true);
    console.log("You clicked on the Inactive Filter!")
  }



  return (
    <div className="s-page">
      <div className="s-sidebar">
        <div className="Doc DocAlertPopup">
          <div className="DocEntry">
            <div className="Example" style={{ gridGap: "2rem" }}>
              <Sidebar
                sideBarHeaderData={{
                  sideBarHeaderTitle: "Web Personalization",
                  sideBarLogo: "",
                }}
                sidebarData={[
                  {
                    _id: "1",

                    title: "Dashboard",

                    route: "#",

                    asset: "",
                  },

                  {
                    _id: "2",

                    title: "Use Cases",

                    route: "/use-cases",

                    asset: "",
                    isDisabled: true,
                  },

                  {
                    _id: "3",

                    title: "Segments",

                    route: "/segments",

                    asset: "",
                  },
                  {
                    _id: "88",

                    title: "Audiences",

                    route: "/audience",

                    asset: "",

                    subItems: [
                      {
                        _id: "881",

                        title: "Find People",

                        route: "people",

                        asset: "",
                      },
                      {
                        _id: "882",

                        title: "Pre-Built Segments",

                        route: "segments",

                        asset: "",
                      },
                    ],
                  },
                  {
                    _id: "4",

                    title: "Pages",

                    route: "#",

                    asset: "",
                  },

                  {
                    _id: "5",

                    title: "Campaigns",

                    route: "#",

                    asset: "",
                  },

                  {
                    _id: "6",

                    title: "Template Library",

                    route: "#",

                    asset: "",
                  },

                  {
                    _id: "7",

                    title: "Brand Kit",

                    route: "#",

                    asset: "",
                  },

                  {
                    _id: "8",

                    title: "Analytics",

                    route: "#",

                    asset: "",
                    subItems: [
                      {
                        _id: "881",

                        title: "Find People",

                        route: "people",

                        asset: "",
                      },
                      {
                        _id: "882",

                        title: "Pre-Built Segments",

                        route: "segments",

                        asset: "",
                      },
                    ],
                  },
                ]}
                handleItemOnClick={() => {}}
                supportCallback={handleSupportCallback}
              />
            </div>
          </div>
        </div>
      </div>
      <div className="s-right-container">
        <Navbar
          className="s-navbar"
          navbarLeftSection={
            <img
              style={{ width: "1.25rem", height: "1.25rem" }}
              src="https://attryb.com/assets/images/vector.svg"
              alt=""
            />
          }
          navbarRightSection={
            <>
              <ProfileDropDown
                showProfile={showProfile}
                hideProfileHandler={hideProfileHandler}
                handleProfileToggle={handleProfileToggle}
                productsConfig={productsConfig}
                userImage={userImage}
                organizationName={organizationName}
                name={name}
                email={email}
                urlCallBack={urlCallBack}
                profileChevronIcon={
                  "/attryb-ui/assets/icons/navbar/chevron-white.svg"
                }
                productChevronIcon={
                  "/attryb-ui/assets/icons/navbar/chevron-black.svg"
                }
                settingUrlOpenIn="redirect"
                signOutCallBack={signOutCallBack}
              />
            </>
          }
        />

<div className="table-parent" >
          {/* top functionality wrapper starts */}
                  <div className="top-functionality--wrapper">
                    <div className="left-container--wrapper">
                      <Button variant="solid" onClick = {handleFilterClickActive} state={activeFilterClickedState ? "clicked" : ""} colorScheme="secondary" style={{borderTopRightRadius: "0px", borderBottomRightRadius: "0px", borderRight:"0px"}}>Active</Button>
                      <Button variant="solid" onClick = {handleFilterClickInactive} state={inactiveFilterClickedState ? "clicked" : ""} colorScheme="secondary" style={{borderRadius: "0px", borderRight: "0px"}}>Inactive</Button>
                      <Button variant="solid" onClick = {handlefilterClickViewAll} state={viewallFilterClickedState ? "clicked" : ""} colorScheme="secondary" style={{borderTopLeftRadius: "0px", borderBottomLeftRadius: "0px"}}>View All</Button>
                    </div>
  
                      <div className="right-container--wrapper">
                        {/* <SearchBarComponent placeholder={"Search for Use Case"} isOpenInit={false} /> */}
                        <Button variant="solid" colorScheme="secondary">
                          <img src="/attryb-ui/assets/icons/button/IconPlusBlack.svg"></img>
                          Add New Button
                        </Button>
                        <Button variant="solid" colorScheme="secondary"> <img src="/attryb-ui/assets/icons/loader/filter-linesicon.svg" />Filters</Button>

                      </div>
                  </div>
          {/* the top functionality wrapper ends  */}
            <Table 
                data={data} 
                columns={columns} 
                showPaginationFooter={true} 
                onClickRow={handleClick}
                onPageChange={(e,selectedPage)=>{setCurrentPage(selectedPage)}}
                totalPageCount={10}
                currentPage={currentPage}
                pageSize={10}
                showRowsLimit={true}
                limitRows={limitRows}
                rowActiveItem={rowActiveItem}
                onSelect={onSelect}
                onHeaderClick={handleSorting}
                sortingType='client'
                />
        </div>
      </div>
    </div>
  );
}

export default Template;
