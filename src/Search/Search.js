import React, { Component } from "react";
import { API_KEY } from "../constants";
import "./Search.css";
import Card from "../Card/Card";
class Search extends Component {
  state = {
    value: "",
    movies: [],
  };
  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }
  handleClick(e) {
    {
      this.state.value &&
        Promise.all([
          fetch(
            "https://api.themoviedb.org/3/search/movie?" +
              API_KEY +
              "language=en-US&query=" +
              this.state.value +
              "&page=1&include_adult=false"
          ).then(response => response.json()),
          fetch(
            "https://api.themoviedb.org/3/genre/movie/list?api_key=" +
              API_KEY +
              "&language=en-US"
          ).then(response => response.json()),
        ]).then(response => {
          const movieList = response[0].results;
          const genreList = response[1].genres;
          const newMovie = movieList.map(movie => ({
            title: movie.original_title,
            description: movie.overview,
            src:
              movie.poster_path &&
              "https://image.tmdb.org/t/p/w500" + movie.poster_path,
            genres_id: movie.genre_ids,
            genres_name: movie.genre_ids.map(
              genreID => genreList.find(id => id.id === genreID).name
            ),
            id: movie.id,
          }));
          this.setState({ movies: newMovie });
        });
    }
  }

  render() {
    return (
      <div className="search-page">
        <div className="search-space">
          <div className="search-input">
            <input
              className="input"
              type="text"
              value={this.state.value}
              onChange={this.handleChange.bind(this)}
            />
            <div>
              <button
                className="search-button"
                onClick={this.handleClick.bind(this)}>
                <div className="search-text">Search</div>
              </button>
            </div>
          </div>
        </div>
        <div className="results-movies">
          {this.state.movies.map(movie => {
            return (
              <div>
                <Card
                  title={movie.title}
                  genres={movie.genres_name}
                  description={movie.description}
                  src={movie.src}
                  to={"/movie/" + movie.id}
                />
              </div>
            );
          })}
          ;
        </div>
      </div>
    );
  }
}
export default Search;
