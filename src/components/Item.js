import React from 'react';
import PropTypes from 'prop-types';

const Item = ({ recipe, history, handleClick }) => {
  const { idMeal, strMeal, strMealThumb } = recipe;

  const clickRecipe = id => {
    handleClick();
    history.push(`/${id}`);
  };

  return (
    <div onClick={() => clickRecipe(idMeal)}>
      <h4>{strMeal}</h4>
      <img src={`${strMealThumb}`} alt={strMeal} />
    </div>
  );
};

Item.propTypes = {
  recipe: PropTypes.oneOfType([PropTypes.array, PropTypes.object]).isRequired,
  handleClick: PropTypes.func.isRequired,
  history: PropTypes.objectOf(Object).isRequired,
};

export default Item;
