import React, { Component } from 'react';

import CurrentSong from './components/CurrentSong'
import Controls from './components/Controls'
import Options from './components/Options'

import './style.css'

import data from './mock.json'

class Player extends Component {
  state = {
    progress: 50
  }

  render() {
    return (
      <div className="player">
        <div className="player__current-song">
          <CurrentSong song={data.song}></CurrentSong>
        </div>
        <div className="player__controls">
          <Controls progress={this.state.progress}></Controls>
        </div>
        <div className="player__options">
          <Options></Options>
        </div>
      </div>
    );
  }
}

export default Player;