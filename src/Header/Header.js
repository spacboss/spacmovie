import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <Link to="/about">SMH</Link>
    </header>
  );
}

export default Header;
