import { FILTER, RECIPE } from '../actions/index';
import { API_ID, API_FILTER, API_DETAIL } from '../api/mealdb';

const apiUrlReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER:
      return `${API_ID}${API_FILTER}${action.payload}`;
    case RECIPE:
      return `${API_ID}${API_DETAIL}${action.payload}`;
    default:
      return state;
  }
};

export default apiUrlReducer;
