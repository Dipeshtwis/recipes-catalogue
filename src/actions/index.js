export const FILTER = 'FILTER';

export const filterRecipesAction = category => ({
  type: FILTER,
  category,
});
