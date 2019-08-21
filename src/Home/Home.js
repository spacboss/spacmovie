import React from "react";
import { Link } from "react-router-dom";
import Card from "../Card/Card.js";

function Home() {
  return (
    <div>
      <Link to="about">Go To About Page</Link>,
      <Card sar="Mercedes">yututu</Card>
    </div>
  );
}

export default Home;
