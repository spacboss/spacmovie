import React from "react";
import { Link } from "react-router-dom";
import Collection from "../Collection/Collection.js";
function Home() {
  return (
    <div>
      <Link to="about">Go To About Page</Link>
      <Collection col="vbvbvbvb"></Collection>
    </div>
  );
}

export default Home;
