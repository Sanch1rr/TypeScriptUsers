import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Main from "./Main";

export default function Header() {
  const mainStyle = {
    backgroundColor: "#45D9B2",
    padding: "20px",
    header: {
      display: "flex",
      justifyContent: "space-between",
      marginRight: "60%",
    },
    btn: {
      backgroundColor: "#F7C5C5",
      borderRadius: "10px",
      width: "150px",
      height: "50px",
    },
    img: {
      width: "25px",
    },
  };
  function changeBackground(e: any) {
    e.target.style.background = "#FF6666";
  }
  function removeHover(e: any) {
    e.target.style.background = "#F7C5C5";
  }
  function buttonHandler(e: any) {}

  return (
    <header style={mainStyle}>
      <div style={mainStyle.header}>
        <button
          style={mainStyle.btn}
          onMouseOver={changeBackground}
          onMouseOut={removeHover}
          onClick={buttonHandler}
        >
          <img style={mainStyle.img} src="icon/home.png" alt="home" /> Home
        </button>
        <button
          style={mainStyle.btn}
          onMouseOver={changeBackground}
          onMouseOut={removeHover}
        >
          <img style={mainStyle.img} src="icon/group.png" alt="" /> Users
        </button>
        <button
          style={mainStyle.btn}
          onMouseOver={changeBackground}
          onMouseOut={removeHover}
        >
          <img style={mainStyle.img} src="icon/add.png" alt="" /> Add User
        </button>
        <button
          style={mainStyle.btn}
          onMouseOver={changeBackground}
          onMouseOut={removeHover}
        >
          <img style={mainStyle.img} src="icon/error.png" alt="" /> Not Found
        </button>
      </div>
    </header>
  );
}
