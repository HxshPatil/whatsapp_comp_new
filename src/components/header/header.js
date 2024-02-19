import React from "react";
import "./header.css";

function Header({ title, text }) {
  return (
    <>
      <div className="header-title text-lg--sb">{title}</div>
      <div className="header-text text-sm">{text}</div>
    </>
  );
}

export default Header;
