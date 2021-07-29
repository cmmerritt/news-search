import React from 'react';
import PropTypes from 'prop-types';

const SearchControl = ({ text, onChange }) => (
  <>
    <label htmlFor="text">Search by keyword: </label>
    <input id="text" type="text" name="text" value={text} onChange={onChange} />
  </>
);

SearchControl.propTypes = {
  text: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

export default SearchControl;
