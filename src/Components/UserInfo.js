import React, { useState } from "react";
import "../Styles/UserInfo.css";
import profilePic from "../Assets/Images/300819866_570261568158298_8443709233593606227_n.jpg";

function UserInfo() {
  const [info, setInfo] = useState([]);

  fetch("http://jsonplaceholder.typicode.com/users/1").then((res) => {
    res.json().then(setInfo);
  });
  return (
    <div>
      <div className="main">
        <div className="profilePicture">
          <span className="canvas">
            <img className="profilePic" src={profilePic}></img>
          </span>
        </div>
        <div className="about">
          <div className="userName">
            <div> {info.username}</div>
            <div className="verified">
                <img src="https://static.cdninstagram.com/rsrc.php/v3/yV/r/6JqvJ6H_bFT.png"></img>
            </div>
            <div className="btns">
              <button className="btn"> Follow</button>
              <button className="btn">Message</button>
            </div>

            <div className="options">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-three-dots"
                viewBox="0 0 16 16"
              >
                {" "}
                <path d="M3 9.5a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm5 0a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3z" />{" "}
              </svg>
            </div>
          </div>

          <div className="metrics">
            <div className="metricsLI">
              <span className="liSpan">1502</span>posts
            </div>
            <div className="metricsLI">
              <span className="liSpan">2.3M</span>followers
            </div>
            <div className="metricsLI">
              <span className="liSpan">262</span>following
            </div>
          </div>
          <div className="bio">
            <div className="name">{info.name}</div>
            <div className="website">
              <a src={info.website}> {info.website} </a>
            </div>
            <div className="caption">{info.email}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserInfo;
