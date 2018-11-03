import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import FilmListing from './Components/filmListing.js'
import FilmDetails from './Components/filmDetails';

class App extends Component {
  render() {
    return (
      <div className="film-library">
      <FilmListing />
      <FilmDetails />

    </div>
    );
  }
}

export default App;
