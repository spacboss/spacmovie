import React from "react";
import "./Header.css";
import { API_KEY } from "../constants.js";

function Header(props) {
  fetch(
    "https://api.themoviedb.org/3/discover/movie?API_KEY=3bc84379c3185aadbf1b28c397e1a678&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1"
  );
  return (
    <header className="header">
      <div className="header-logo">
        <img className="logo" src={props.imgSrc} alt="" />
      </div>
      <ul>
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
