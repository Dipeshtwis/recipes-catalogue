import React from 'react';
import PropTypes from 'prop-types';

const Filter = ({ handleFilter, categories }) => (
  <>
    <h2>Categories</h2>
    <div className="category">
      {
        categories.map(category => (
          <div key={category.idCategory}>
            <img src={category.strCategoryThumb} alt="{category.strCategory}" />
            <button
              type="button"
              key={category.idCategory}
              onClick={handleFilter}
              onKeyDown={handleFilter}
            >
              {category.strCategory}
            </button>
          </div>
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
