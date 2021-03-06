/* eslint-disable max-len */
import React from 'react';
import PropTypes from 'prop-types';

const SearchControl = ({ text, onChange, onSubmit }) => {
  console.log(text);
  return <form>
    <label htmlFor="text">Search by keyword: </label>
    <input data-testid="textInput" id="text" placeholder="Search" type="text" name="text" value={text} onChange={onChange} onSubmit={onSubmit}/>
  </form>;
};

SearchControl.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  onSubmit: PropTypes.func.isRequired
};

export default SearchControl;
