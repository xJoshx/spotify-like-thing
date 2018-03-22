import React from 'react';
import PropTypes from 'prop-types';
import './style.css'
const Search = props => {
  return (
    <div className='search'>
      <i className="search__icon-left material-icons search__icon">search</i>
      <input className="search__input" type='text' placeholder={ props.placeholder } />
      <i className="search__icon-right material-icons search__icon search__icon--close">close</i>
    </div>
  );
};

Search.propTypes = {
  placeholder: PropTypes.string
};

export default Search;