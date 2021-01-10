import {
  filterRecipesAction,
  getCategoriesAction,
  getRecipeAction,
} from '../../actions/index';

describe('actions', () => {
  describe('filterRecipesAction', () => {
    const payload = 'Chicken';
    it('returns an object with payload and type properties', () => {
      expect(filterRecipesAction(payload)).toEqual({ type: 'FILTER', payload: 'Chicken' });
    });
  });
});