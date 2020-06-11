import React from "react";
import logo from "../Images/softlogo.PNG";
import { NavStyle } from "../Styles/NavStyle";

const Navigation = () => (
  <NavStyle className="navigation">
    <div className="logo">
      <a>
        <img src={logo} alt="logo" />
      </a>
    </div>
    <div className="list-items-container">
      <ul className="list-items">
        <li className="list-item">
          <a>FAQ</a>
        </li>
        <li className="list-item">
          <a>About</a>
        </li>
        <li className="list-item">
          <a>Sign in</a>
        </li>
      </ul>
    </div>
  </NavStyle>
);

export default Navigation;
