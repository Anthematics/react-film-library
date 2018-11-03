import React from 'react'
import ReactDOM from 'react-dom'
import TMDB from '../TMDB.js'

class FilmDetails extends React.Component {
  render() {
    return(
      <div className="film-details">
        <h1 className="section-title">DETAILS</h1>
      </div>
    )
  }
}

export default FilmDetails

// to go up one level and reach into the parent we import from '../parent'