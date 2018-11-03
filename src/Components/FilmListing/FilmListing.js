import React from 'react'
import ReactDOM from 'react-dom'
import FilmDetails from './../FilmDetails/FilmDetails.js'
import  TMDB from '../../TMDB.js'

class FilmListing extends React.Component {
  constructor(props) {
    super(props);
  }
render() {
    return(
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <p> <FilmDetails/> </p>
          <p> {TMDB.films.map((film , index)=> {
            return <p> {film.title} </p>
          })
          } </p>
      </div>
    )
  }
}

export default FilmListing;

//import here works like ./ (root) ../(Component level)/(file.js)

// const TMDB = {
//   api_key: 'f527bf5b2ad1b9c203406930543a0ab5',
//   films: [
//     {
//       "id": 346364,
//         "title": "It",
//         "poster_path": "/9E2y5Q7WlCVNEhP5GiVTjhEhx1o.jpg",
//         "backdrop_path": "/tcheoA2nPATCm2vvXw2hVQoaEFD.jpg",
//         "overview": "In a small town in Maine, seven children known as
//The Losers Club come face to face with life problems, bullies and a monster that takes the shape of a clown called Pennywise.",
//         "release_date": "2017-09-05"
//     },