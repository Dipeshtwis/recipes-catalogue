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
      {isError && <p className="info">Something went wrong ...</p>}
      {
        isLoading ? <p className="info">Loading Recipe Details...</p>
          : (
            <div className="gap">
              <h3 className="list-item">
                Category:
                <span className="span-item">{recipe.strCategory}</span>
              </h3>
              <h3 className="list-item">
                Origin:
                <span className="span-item">{recipe.strArea}</span>
              </h3>
              <div className="category">
                <div className="recipe-img">
                  <img src={recipe.strMealThumb} alt={recipe.strMeal} className="category-img item" />
                </div>
                <div className="origin">
                  <h3 className="list-item">Dish Name:</h3>
                  <h2 className="category-header">{recipe.strMeal}</h2>
                </div>
              </div>
              <div>
                <table>
                  <thead>
                    <tr className="row">
                      <th>ingredients</th>
                      <th>Quantity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      ingredients.map((ingredient, i) => (
                        <tr className="row" key={`${ingredient}-${i + 1}`}>
                          <td>{ingredient}</td>
                          <td>{quantity[i]}</td>
                        </tr>
                      ))
                    }
                  </tbody>
                </table>
              </div>
              <div className="instruct">
                <h4 className="category-header recipe-header">Instructions</h4>
                <p>{recipe.strInstructions}</p>
              </div>
            </div>
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
