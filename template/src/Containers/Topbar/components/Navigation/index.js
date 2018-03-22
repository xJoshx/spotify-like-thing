import React from 'react'
import PropTypes from 'prop-types'
import './style.css'

const Navigation = props => {
  return (
    <div className='navigation'>
      <i className="material-icons navigation__icon">navigate_before</i>
      <i className="material-icons navigation__icon">navigate_next</i>
    </div>
  )
}

Navigation.propTypes = {
  tooltipBack: PropTypes.string,
  tooltipForward: PropTypes.string
}

export default Navigation