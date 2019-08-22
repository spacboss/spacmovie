import React from "react";
import "./Collection.css";
import Card from "../Card/Card";
import { API_KEY } from "../constants.js";
class Collection extends React.Component {
  state = {
    status: "succes",
    movies: [],
  };

  componentDidMount() {
    console.log("colection did mount");
    console.log("collection state", this.state.status);
    fetch("https://api.themoviedb.org/3/discover/movie?api_key=" + API_KEY)
      .then(response => response.json())
      .then(response => {
        console.log(response);

        this.setState({
          movies: response.results.map(movie => {
            return {
              title: movie.original_title,
              description: movie.overview,
              src: "https://image.tmdb.org/t/p/w500" + movie.poster_path,
              genres: movie.genre_ids,
            };
          }),
        });
      });

    this.setState({ status: "error" });
  }

  render() {
    console.log("New status:", this.state.status);
    console.log(this.state.movies);
    return (
      <div>
        <h1>state: {this.state.status}</h1>
        <div className="grid">
          {this.state.movies.map((movie, index) => {
            return (
              <Card
                key={index}
                title={movie.title}
                description={movie.description}
                genres={movie.genres}
                src={movie.src}></Card>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Collection;
