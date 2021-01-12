import { RECIPE_FETCH_INIT, RECIPE_FETCH_SUCCESS, RECIPE_FETCH_FAILURE } from '../actions/index';

const recipeFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case RECIPE_FETCH_INIT:
      return {
        ...state,
        isLoading: true,
        isError: false,
      };
    case RECIPE_FETCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isError: false,
        recipes: action.payload,
      };
    case RECIPE_FETCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        isError: true,
      };
    default:
      return state;
  }
};

export default recipeFetchReducer;
