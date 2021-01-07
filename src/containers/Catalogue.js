import React, { useCallback, useEffect } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Filter from '../components/Filter';
import List from '../components/List';
import {
  filterRecipesAction, getCategoriesAction, fetchInitAction, fetchSuccessAction, fetchFailureAction,
} from '../actions/index';
import { API_ID, API_CATEGORY } from '../api/mealdb';

const Catalogue = props => {
  const {
    filterRecipes,
    getCategories,
    fetchInit,
    url,
    fetchSuccess,
    fetchFailure,
    filter,
    categories,
    recipes,
  } = props;

  const handleFilter = e => {
    filterRecipes(e.target.innerText);
  };

  const handleFilterSelect = useCallback(() => {
    filterRecipes(filter);
  }, [filter, filterRecipes]);

  const fetchCategories = useCallback(() => {
    Axios.get(`${API_ID}${API_CATEGORY}`)
      .then(res => {
        getCategories(res.data.categories);
      })
      .catch(fetchFailure());
  }, [getCategories, fetchFailure]);

  const handleFetchRecipes = useCallback(() => {
    fetchInit();

    Axios.get(url)
      .then(res => {
        fetchSuccess(res.data);
      })
      .catch(() => {
        fetchFailure();
      });
  }, [url, fetchInit, fetchSuccess, fetchFailure]);

  useEffect(() => {
    handleFilterSelect();
  }, [filter]);

  useEffect(() => {
    handleFetchRecipes();
  }, [handleFetchRecipes]);

  useEffect(() => {
    fetchCategories();
  }, [fetchCategories]);

  return (
    <>
      <Filter handleFilter={handleFilter} categories={categories} />
      <List recipes={recipes} category={filter} />
    </>
  );
};

Catalogue.defaultProps = {
  recipes: [],
  url: '',
  categories: [],
  filter: '',
};

Catalogue.propTypes = {
  filterRecipes: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  url: PropTypes.string,
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
  filter: PropTypes.string,
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  recipes: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

const mapStateToProps = state => ({
  recipes: state.data.recipes,
  categories: state.categories,
  filter: state.filter,
  url: state.url,
});

const mapDispatchToProps = dispatch => ({
  filterRecipes: category => dispatch(filterRecipesAction(category)),
  getCategories: categories => dispatch(getCategoriesAction(categories)),
  fetchInit: () => dispatch(fetchInitAction()),
  fetchSuccess: data => dispatch(fetchSuccessAction(data)),
  fetchFailure: () => dispatch(fetchFailureAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
