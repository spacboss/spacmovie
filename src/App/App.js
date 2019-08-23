import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./App.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

import Home from "../Home/Home";
import About from "../About/About";
import New from "../New/New";
import Popular from "../Popular/Popular";
import Movie from "../Movie/Movie";
function App() {
  return (
    <Router>
      <div className="app">
        <Header
          logoText="Spaculetzul"
          menu={[
            { link: "/popular", title: "Popular" },
            { link: "/new", title: "New" },
            { link: "/search", title: "Search" },
          ]}
          imgSrc="https://www.freelogodesign.org/file/app/client/thumb/2310dc58-7d53-4a42-8622-bd5d2168f957_200x200.png?1566557899205"></Header>
        <div className="app-content">
          <Route path="/" exact component={Home}></Route>
          <Route path="/about" exact component={About}></Route>
          <Route path="/new" exact component={New}></Route>
          <Route path="/popular" exact component={Popular}></Route>
          <Route path="/movie/:id" exact component={Movie}></Route>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
