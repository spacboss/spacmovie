import React from "react";
import "./Card.css";
import { API_KEY } from "../constants.js";

function Card(props) {
  return <div className="CARD">{props.sar}</div>;
}

export default Card;
