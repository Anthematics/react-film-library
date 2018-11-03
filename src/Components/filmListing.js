import React from 'react'
import ReactDOM from 'react-dom'
import FilmDetails from './filmDetails'
import TMDB from '../TMDB.js'

class FilmListing extends React.Component {
render() {
    return(
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <p> </p>
      </div>
    )
  }
}

export default FilmListing;