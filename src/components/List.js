import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ recipes }) => (
  <div>
    <h2>Category Name</h2>
    <div>
      {
        recipes && recipes.map(recipe => (
          <Item key={recipe.idMeal} recipe={recipe} />
        ))
      }
    </div>
  </div>
);

List.defaultProps = {
  recipes: [],
};

List.propTypes = {
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default List;
