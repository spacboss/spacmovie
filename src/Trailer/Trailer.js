import React from "react";
import "./Trailer.css";
import { API_KEY } from "../constants";
class Trailer extends React.Component {
  state = {
    movie: {},
  };
  componentDidMount() {
    if (this.props.id)
      fetch(
        "https://api.themoviedb.org/3/movie/" +
          this.props.id +
          "/videos?api_key=" +
          API_KEY
      )
        .then(response => response.json())
        .then(movie => {
          this.setState({
            movie: {},
          });
        });
  }
  render() {
    return (
      <div>
        <div className="trailer-card">
          <iframe
            width="910"
            height="500"
            src={`https://www.youtube.com/embed/${this.state.movie.src}`}
            frameBorder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen></iframe>
        </div>
      </div>
    );
  }
}
export default Trailer;
