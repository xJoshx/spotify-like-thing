import React, { Component } from 'react'
import Sidebar from './Containers/Sidebar'
import Player from './Containers/Player'
import Topbar from './Containers/Topbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Topbar></Topbar>
        <Sidebar></Sidebar>
        <Player></Player>
      </div>
    );
  }
}

export default App
