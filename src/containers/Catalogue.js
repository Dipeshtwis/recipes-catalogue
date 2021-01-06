import React, { useCallback } from 'react';
import { connect } from 'react-redux';
import Axios from 'axios';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import List from '../components/List';
import {
  filterRecipesAction, getCategoriesAction, fetchInitAction, fetchSuccessAction, fetchFailureAction,
} from '../actions/index';

const Catalogue = props => {
  const {
    filterRecipes, getCategories, fetchInit, url, fetchSuccess, fetchFailure,
  } = props;

  const handleFetchRecipes = useCallback(() => {
    fetchInit();

    Axios.get(url)
      .then(res => {
        fetchSuccess(res);
      })
      .catch(() => {
        fetchFailure();
      });
  }, []);

  return (
    <>
      <Header />
      <Filter />
      <List />
      <Footer />
    </>
  );
};

Catalogue.propTypes = {
  filterRecipes: PropTypes.func.isRequired,
  getCategories: PropTypes.func.isRequired,
  url: PropTypes.string,
  fetchInit: PropTypes.func.isRequired,
  fetchSuccess: PropTypes.func.isRequired,
  fetchFailure: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  data: state.data,
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
