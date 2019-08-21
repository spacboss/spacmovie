import React from "react";
import "./Card.css";
import { API_KEY } from "../constants.js";

function Card() {
  return (
    <div className="grid">
      <div className="card">
        <img
          className="card-img1"
          src="https://s3.amazonaws.com/rapgenius/Homer_Simpson_Vector_by_bark2008.png"
          alt=""
        />
        <h5>HOMER </h5>
        <p></p>
      </div>

      <div className="card">
        <img
          className="card-img2"
          src="https://upload.wikimedia.org/wikipedia/fi/thumb/0/01/Bart_Simpson_2009.svg/200px-Bart_Simpson_2009.svg.png"
          alt=""
        />
        <h5>BART</h5>
        <p></p>
      </div>

      <div className="card">
        <img
          className="card-img3"
          src="http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Marge-Simpson-icon.png"
          alt=""
        />
        <h5>MARGE</h5>
        <p></p>
      </div>

      <div className="card">
        <img
          className="card-img4"
          src="http://icons.iconarchive.com/icons/jonathan-rey/simpsons/256/Lisa-Simpson-icon.png"
          alt=""
        />
        <h5>LISA</h5>
        <p></p>
      </div>
    </div>
  );
}

export default Card;
