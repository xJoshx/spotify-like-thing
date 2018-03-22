import React, { Component } from 'react'
import List from './components/List'
import NewListButton from './components/NewListButton'

import './style.css'

import data from './mock.json'

class Sidebar extends Component {
    render() {
        return (
            <aside className="sidebar">
                <div className="sidebar__menu">
                    <List items={data.menu}></List>
                </div>                
                <div className="sidebar__sections">
                    <List title="Your music" items={data.sections}></List>
                </div>
                <div className="sidebar__playlists">
                {
                    data.playlists ? <List title="Playlists" items={data.playlists}></List> : null
                }
                </div>
                <div className="sidebar__new-list-button">
                    <NewListButton></NewListButton>                
                </div>
            </aside>
        )
    }
}

Sidebar.propTypes = {

};

export default Sidebar