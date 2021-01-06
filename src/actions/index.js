export const FILTER = 'FILTER';
export const CATEGORIES = 'CATEGORIES';
export const RECIPE = 'RECIPE';
export const RECIPE_FETCH_INIT = 'RECIPE_FETCH_INIT';
export const RECIPE_FETCH_SUCCESS = 'RECIPE_FETCH_SUCCESS';
export const RECIPE_FETCH_FAILURE = 'RECIPE_FETCH_FAILURE';

export const filterRecipesAction = category => ({
  type: FILTER,
  payload: category,
});

export const getCategoriesAction = categories => ({
  type: CATEGORIES,
  payload: categories,
});

export const getRecipeAction = id => ({
  type: RECIPE,
  payload: id,
});

export const fetchInitAction = () => ({
  type: RECIPE_FETCH_INIT,
});

export const fetchSuccessAction = data => ({
  type: RECIPE_FETCH_SUCCESS,
  payload: data.meals,
});

export const fetchFailureAction = () => ({
  type: RECIPE_FETCH_FAILURE,
});
