import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './style.css'

import Navigation from './components/Navigation'
import Search from './components/Search'

class Topbar extends Component {
  render() {
    return (
      <div className='topbar'>
        <Navigation></Navigation>
        <Search></Search>
      </div>
    );
  }
}

Topbar.propTypes = {
  username: PropTypes.string
};

export default Topbar;