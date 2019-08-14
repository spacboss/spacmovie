import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {
  return (
    <Router>
      <div className="app">
        <Header></Header>
        <div className="app-content">
          <h1>Baz</h1>
        </div>
        <Footer></Footer>
      </div>
    </Router>
  );
}

export default App;
