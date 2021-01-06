export const FILTER = 'FILTER';
export const RECIPE_FETCH_INIT = 'RECIPE_FETCH_INIT';
export const RECIPE_FETCH_SUCCESS = 'RECIPE_FETCH_SUCCESS';
export const RECIPE_FETCH_FAILURE = 'RECIPE_FETCH_FAILURE';

export const filterRecipesAction = category => ({
  type: FILTER,
  payload: category,
});

export const fetchInitAction = () => ({
  type: RECIPE_FETCH_INIT,
});

export const fetchSuccessAction = () => ({
  type: RECIPE_FETCH_SUCCESS,
});

export const fetchFailureAction = () => ({
  type: RECIPE_FETCH_FAILURE,
});
