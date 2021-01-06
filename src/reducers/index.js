import { createStore, combineReducers } from 'redux';
import recipesFilterReducer from './filter';
import recipeFetchReducer from './recipe';
import apiUrlReducer from './apiUrl';
import categoriesReducer from './categories';

const rootReducer = combineReducers({
  data: recipeFetchReducer,
  categories: categoriesReducer,
  filter: recipesFilterReducer,
  url: apiUrlReducer,
});

const store = createStore(rootReducer);

export default store;
