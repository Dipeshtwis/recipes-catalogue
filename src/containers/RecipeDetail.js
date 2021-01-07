import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';
import {
  fetchInitAction, fetchSuccessAction, fetchFailureAction,
} from '../actions/index';
import { API_ID, API_DETAIL } from '../api/mealdb';

const RecipeDetail = props => {
  const id = '52772';
  const {
    recipe,
    isLoading,
    isError,
    fetchInit,
    fetchSuccess,
    fetchFailure,
  } = props;

  const fetchRecipeDetail = useCallback(() => {
    fetchInit();

    Axios.get(`${API_ID}${API_DETAIL}${id}`)
      .then(result => {
        fetchSuccess(result.data);
      })
      .catch(fetchFailure());
  }, [fetchSuccess, fetchInit, fetchFailure, id]);

  useEffect(() => {
    fetchRecipeDetail();
  }, [fetchRecipeDetail]);

  const ingredients = [];

  !isLoading && Object.entries(recipe).forEach(([key, value]) => {
    let ingredient = '';
    if (key.includes('strIngredient') && value) {
      ingredient = value.split('');
      ingredient[0] = ingredient[0].toUpperCase();
      ingredients.push(ingredient.join(''));
    }
  });

  return (
    <>
      {isError && <p>Something went wrong ...</p>}
      {
        isLoading ? 'Loading Recipe Details...'
          : (
            <>
              <img src={recipe.strMealThumb} alt={recipe.strMeal} />
              <h2>{recipe.strMeal}</h2>
              <ul>
                <li key={recipe.strCategory}>
                  Category:
                  {' '}
                  {recipe.strCategory}
                </li>
                <li key={recipe.strArea}>
                  Origin:
                  {' '}
                  {recipe.strArea}
                </li>
              </ul>
              <ul>
                {
                ingredients.map(ingredient => <li key={ingredient}>{ingredient}</li>)
              }
              </ul>
            </>
          )
      }
    </>
  );
};

const mapStateToProps = state => ({
  isLoading: state.data.isLoading,
  isError: state.data.isError,
  recipe: state.data.recipes[0],
  url: state.url,
});

const mapDispatchToProps = dispatch => ({
  fetchInit: () => dispatch(fetchInitAction()),
  fetchSuccess: data => dispatch(fetchSuccessAction(data)),
  fetchFailure: () => dispatch(fetchFailureAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
