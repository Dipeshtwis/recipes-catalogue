import {
  filterRecipesAction,
  getCategoriesAction,
  getRecipeAction,
} from '../actions/index';

describe('actions', () => {
  describe('filterRecipesAction', () => {
    const payload = 'Chicken';
    it('returns an object with payload and type properties', () => {
      expect(filterRecipesAction(payload)).toEqual({ type: 'FILTER', payload: 'Chicken' });
    });
  });

  describe('getCategoriesAction', () => {
    const payload = ['Chicken'];
    it('returns an object with payload and type properties', () => {
      expect(getCategoriesAction(payload)).toEqual({ type: 'CATEGORIES', payload: ['Chicken'] });
    });
  });

  describe('getRecipeAction', () => {
    const payload = 527794;
    it('returns an object with payload and type properties', () => {
      expect(getRecipeAction(payload)).toEqual({ type: 'RECIPE', payload: 527794 });
    });
  });
});
