import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

const List = ({ recipes }) => (
  <div>
    <h2>Category Name</h2>
    {
      recipes.map(recipe => {
        <Item key={recipe.idMeal} recipe={recipe} />;
      })
    }
    <Item />
  </div>
);

List.PropTypes = {
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default List;
