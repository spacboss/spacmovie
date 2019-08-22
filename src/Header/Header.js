import React from "react";
import "./Header.css";
import { API_KEY } from "../constants.js";

function Header(props) {
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src={props.imgSrc} alt="" />
      </div>
      <ul className="header-menu">
        {props.menu.map(item => (
          <li className="list-item" key={item}>
            {item}
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
