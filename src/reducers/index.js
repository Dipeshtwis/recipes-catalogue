import { createStore, combineReducers } from 'redux';
import recipesFilterReducer from './filter';
import recipeFetchReducer from './recipe';

const rootReducer = combineReducers({
  filter: recipesFilterReducer,
  data: recipeFetchReducer,
});

const store = createStore(rootReducer);

export default store;
