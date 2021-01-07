import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import PropTypes from 'prop-types';
import {
  fetchInitAction, fetchSuccessAction, fetchFailureAction,
} from '../actions/index';
import { API_ID, API_DETAIL } from '../api/mealdb';

const RecipeDetail = props => {
  const { id } = useParams();
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
  const quantity = [];

  if (!isLoading) {
    Object.entries(recipe).forEach(([key, value]) => {
      if (key.includes('strIngredient') && value) {
        const ingredient = value.split('');
        ingredient[0] = ingredient[0].toUpperCase();
        ingredients.push(ingredient.join(''));
      } else if (key.includes('strMeasure') && value) {
        quantity.push(value);
      }
    });
  }

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
              <div>
                <table>
                  <thead>
                    <tr>
                      <th>ingredients</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ingredients.map((ingredient, i) => (
                        <tr key={`${ingredient}`}>
                          <td>{ingredient}</td>
                          <td>{quantity[i]}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <h4>How To Make</h4>
              <p>{recipe.strInstructions}</p>
            </>
          )
      }
    </>
  );
};

RecipeDetail.defaultProps = {
  recipe: {},
};

RecipeDetail.propTypes = {
  recipe: PropTypes.objectOf(Object),
  isError: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired,
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
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
