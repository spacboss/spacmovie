import React, { Component } from "react";
import { directive } from "@babel/types";
import { API_KEY } from "../constants.js";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }
  handleSubmit(event) {
    event.preventDefault();

    fetch(
      "https://api.themoviedb.org/3/search/movie?api_key=" +
        API_KEY +
        "&query=" +
        this.state.value
    )
      .then(x => x.json())
      .then(results => {});
  }

  render() {
    console.log(this.state.value);
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Search for a movie:
          <input
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default Search;
