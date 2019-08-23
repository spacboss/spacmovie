import React from "react";

function Movie(props) {
  return <div style={{ color: "white" }}>Hello{props.match.params.id}</div>;
}
export default Movie;
