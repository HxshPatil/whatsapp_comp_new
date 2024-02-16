import React from "react";
import "./header.css";

function Header({ title, text }) {
  return (
    <>
      <div className="header-title">{title}</div>
      <div className="header-text">{text}</div>
    </>
  );
}

export default Header;
