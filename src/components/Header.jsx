import React from "react";
import "../css/Header.css";

export default function Header() {
  return (
    <>
      <header>
        <div className="header-logo">
          <img src={require("../asstes/logo.png")} alt="" />
          <div
            className="header-text"
            style={{ fontSize: "2rem", color: "white" }}
          >
            MemeGenerator
          </div>
        </div>
        <div
          className="side-text"
          style={{ fontSize: "1.2rem", color: "white" }}
        >
          React JS
        </div>
      </header>
    </>
  );
}
