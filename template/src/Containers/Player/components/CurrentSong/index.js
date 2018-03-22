import React, { Component } from 'react'
import './style.css'

class CurrentSong extends Component {
  render() {
    return (
      <div className="current-song">
        <img src={this.props.song.cover} alt="Cover"/>
        <ul className="current-song__info">
          <li className="current-song__title">{this.props.song.title}</li>
          <li className="current-song__artist">{this.props.song.artist}</li>
        </ul>
        <div className="current-song__save">
          <i className="material-icons">add</i>
        </div>
      </div>
    )
  }
}

export default CurrentSong