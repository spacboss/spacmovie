import React from "react";
import "./Card.css";
import { API_KEY } from "../constants.js";

function Card({ title, genres, description, src, index }) {
  return (
    <div className="card">
      <div className="card-div">
        <img src={src} className="card-img" src={src} alt="" />
        <div className="text">
          <ul className="genre">
            {genres.map((genre, index) => (
              <li key={index} className="genre-item">
                {genre}
              </li>
            ))}
          </ul>

          <p className="title">{title}</p>
          <p className="par">{description}</p>
          <div className="button-div">
            <button className="button" type="button">
              Read more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
