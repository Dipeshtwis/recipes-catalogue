import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ recipe }) => {
  const { strMeal, strMealThumb } = recipe;
  return (
    <div>
      <h4>{strMeal}</h4>
      <img src={`${strMealThumb}`} alt={strMeal} />
    </div>
  );
};

Item.propTypes = {
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
};

export default Item;
