import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ recipes, category, handleClick }) => (
  <div>
    <h2>{category}</h2>
    <div>
      {
        recipes && recipes.map(recipe => (
          <Item key={recipe.idMeal} recipe={recipe} handleClick={handleClick} />
        ))
      }
    </div>
  </div>
);

List.defaultProps = {
  recipes: [],
  category: '',
};

List.propTypes = {
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  category: PropTypes.string,
  handleClick: PropTypes.func.isRequired,
};

export default List;
