import React, { Component } from 'react'
import './style.css'
class Options extends Component {
  render() {
    return (
      <div className="options">
        <ul className="options__actions">
          <i className="material-icons options__icon">playlist_play</i>
          <i className="material-icons options__icon">devices</i>
          <i className="material-icons options__icon">volume_down</i>
          <i className="material-icons options__icon">volume_up</i>
          <i className="material-icons options__icon">zoom_out_map</i>
        </ul>
      </div>
    )
  }
}

Options.propTypes = {

}

export default Options