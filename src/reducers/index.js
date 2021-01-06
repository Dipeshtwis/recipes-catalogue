import { createStore, combineReducers } from 'redux';
import recipesFilterReducer from './filter';

const rootReducer = combineReducers({
  filter: recipesFilterReducer,
});

const store = createStore(rootReducer);

export default store;
