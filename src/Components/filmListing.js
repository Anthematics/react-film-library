import React from 'react'
import ReactDOM from 'react-dom'
import filmDetails from './filmDetails'
import { TMBD } from '../src/TMBD.js'

class Filmlisting extends React.Component {
render() {
    return(
      <div className="film-list">
          <h1 className="section-title">FILMS</h1>
          <p> {this.TMBD} </p>
      </div>
    )
  }
}