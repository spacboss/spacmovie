import React from "react";
import "./Card.css";
import { API_KEY } from "../constants.js";
import { Link } from "react-router-dom";

function Card({ title, genres, description, src, index }) {
  return (
    <div className="card">
      <div className="card-div">
        {src ? (
          <img src={src} className="card-img" />
        ) : (
          <img src="http://www.movienewz.com/img/films/poster-holder.jpg" />
        )}
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
