import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Header from '../components/Header';
import Filter from '../components/Filter';
import Footer from '../components/Footer';
import List from '../components/List';
import { filterRecipesAction, getCategoriesAction } from '../actions/index';

const Catalogue = props => {
  const { filterRecipes, getCategories } = props;

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
};

const mapStateToProps = state => ({
  data: state.data,
  filter: state.filter,
  url: state.url,
});

const mapDispatchToProps = dispatch => ({
  filterRecipes: category => dispatch(filterRecipesAction(category)),
  getCategories: categories => dispatch(getCategoriesAction(categories)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Catalogue);
