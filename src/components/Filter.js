import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter }) => (
  <>
    <h2>Categories</h2>
    <ul>
      <li onClick={handleFilter}>Chicken</li>
      <li>Pizza</li>
    </ul>
  </>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
};

export default Filter;
