import React from "react";
import logo from "../Images/softlogo.PNG";
import { NavStyle } from "../Styles/NavStyle";

const Navigation = () => (
  <NavStyle className="navigation">
    <div className="logo">
      <a href="#">
        <img src={logo} alt="logo" />
      </a>
    </div>
    <div className="list-items-container">
      <ul className="list-items">
        <li className="list-item">
          <a href="#">FAQ</a>
        </li>
        <li className="list-item">
          <a href="#">About</a>
        </li>
        <li className="list-item">
          <a href="#">Sign in</a>
        </li>
      </ul>
    </div>
  </NavStyle>
);

export default Navigation;
