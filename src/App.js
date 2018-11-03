import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './Components/FilmListing/FilmListing.js'
import FilmDetails from './Components/FilmDetails/FilmDetails.js'

class App extends Component {
  render() {
    return (
      <div className="film-library">
      <FilmListing />

    </div>
    );
  }
}

export default App;
