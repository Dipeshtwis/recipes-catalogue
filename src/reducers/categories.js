import { CATEGORIES } from '../actions/index';

const categoriesReducer = (state = [], action) => {
  switch (action.type) {
    case CATEGORIES:
      return [...action.payload];
    default:
      return state;
  }
};

export default categoriesReducer;
