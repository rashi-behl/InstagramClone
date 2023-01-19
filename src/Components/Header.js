import React from "react";
import "../Styles/Header.css";
import instagramLogo from "../Assets/Images/Instagram_logo.svg.png";


const Header = () => {
  return (
    <>
      <div className="box">
        <div className="innerBox">
          <div className="logo">
            <img className="logoImg" src={instagramLogo} />
          </div>
          <div className="searchBar">
            <input placeholder="Search" className="input" type="text"></input>
          </div>
          <div className="buttons">
            <button className="btn">
              <div className="btnText">Log In</div>
            </button>
            <button className="btn">
              <div className="btnText">Sign Up</div>
            </button>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Header;
