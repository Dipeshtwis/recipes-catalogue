import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter, categories }) => (
  <>
    <h2>Categories</h2>
    <div>
      {
        categories.map(category => (
          <button
            type="button"
            key={category.idCategory}
            onClick={handleFilter}
            onKeyDown={handleFilter}
          >
            {category.strCategory}
          </button>
        ))
      }
    </div>
  </>
);

Filter.propTypes = {
  handleFilter: PropTypes.func.isRequired,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Filter;
