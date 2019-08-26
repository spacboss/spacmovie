import React from "react";
import { API_KEY } from "../constants.js";
import { Link } from "react-router-dom";
import "./Movie.css";
import Actors from "../Actors/Actors";
import Trailer from "../Trailer/Trailer";

class Movie extends React.Component {
  state = {
    movie: {},
    cast: [],
  };

  componentDidMount() {
    console.log("componentDidMount");
    if (this.props.match.params.id)
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.match.params.id +
          "?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(movie => {
          this.setState({
            movie: {
              trailer: "",
              title: movie.original_title,
              description: movie.overview,
              src:
                movie.poster_path &&
                "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
              id: movie.id,
            },
          });
        });

    fetch(
      "https://api.themoviedb.org/3/movie/" +
        this.props.match.params.id +
        "/credits?api_key=" +
        API_KEY
    )
      .then(response => response.json())
      .then(castList => {
        console.log("castList", castList);
        this.setState({
          cast: castList.cast.map((actor, index) => {
            return {
              name: actor.name,
              role: actor.character,
              image:
                actor.profile_path &&
                "https://image.tmdb.org/t/p/w500" + actor.profile_path,
            };
          }),
        });
      });
  }

  render() {
    console.log("render");
    return (
      <div className="individual-card-movie">
        <div className="image-and-text">
          <img className="image-movie" src={this.state.movie.src} alt="" />
          <div className="text-card-movie">
            <p className="movie-title"> {this.state.movie.title}</p>
            <p className="movie-genre">{this.state.movie.genres}</p>
            <p className="movie-description">{this.state.movie.description}</p>
          </div>
        </div>
        <Actors actors={this.state.cast}></Actors>
        <Trailer id={this.props.match.params.id}></Trailer>
      </div>
    );
  }
}

export default Movie;
