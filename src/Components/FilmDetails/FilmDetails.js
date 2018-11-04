import React from 'react'
import ReactDOM from 'react-dom'
import { TMDB } from '../../TMDB.js'
import FilmPoster from './../FilmPoster/FilmPoster.js'
class FilmDetails extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className="film-details">
        <h1 className="section-title"> Film Details</h1>
        <FilmPoster/>
      </div>
    )
  }
}

export default FilmDetails

// to go up one level and reach into the parent we import from '../parent'

// const TMDB = {
//   api_key: 'f527bf5b2ad1b9c203406930543a0ab5',
//   films: [
//     {
//       "id": 346364,
//         "title": "It",
//         "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
//         "backdrop_path": "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
//         "overview": "In a small town in Maine, seven children known as The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
//         "release_date": "2017-09-05"
//     },

//props are similar to HTML attributes