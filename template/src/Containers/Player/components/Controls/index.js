import React, { Component } from 'react'
import Slider from '../../../../Components/Slider'
import './style.css'

class Controls extends Component {
  render() {
    return (
      <div className="controls">
        <ul className="controls__actions">
          <i className="material-icons controls__icon">shuffle</i>
          <i className="material-icons controls__icon">skip_previous</i>
          <i className="material-icons controls__icon">play_arrow</i>
          <i className="material-icons controls__icon">skip_next</i>
          <i className="material-icons controls__icon">repeat</i>
        </ul>
        <div className="controls__progress">
          <Slider progress={this.props.progress}></Slider>
        </div>
      </div>
    )
  }
}

export default Controls