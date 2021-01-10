import {
  fetchInitAction,
  fetchSuccessAction,
  fetchFailureAction,
} from '../../actions/index';
import recipeFetchReducer from '../../reducers/recipe';

describe('recipeFetchReducer', () => {
  const state = {
    recipes: [],
    isLoading: false,
    isError: false,
  };

  describe('Action type is RECIPE_FETCH_INIT', () => {
    it('returns the current state, setting isLoading to true', () => {
      expect(recipeFetchReducer(state, fetchInitAction())).toEqual({
        recipes: [],
        isLoading: true,
        isError: false,
      });
    });
  });

  describe('Action type is RECIPE_FETCH_SUCCESS', () => {
    it('returns a new recipes array, setting both isLoading and isError to false', () => {
      expect(recipeFetchReducer(state, fetchSuccessAction({ meals: ['ingredient1', 'ingredient2'] }))).toEqual({
        recipes: ['ingredient1', 'ingredient2'],
        isLoading: false,
        isError: false,
      });
    });
  });

  describe('Action type is RECIPE_FETCH_FAILURE', () => {
    it('returns the current state, setting isError to true', () => {
      expect(recipeFetchReducer(state, fetchFailureAction())).toEqual({
        recipes: [],
        isLoading: false,
        isError: true,
      });
    });
  });

  it('returns current state if the action type is other than the above three', () => {
    expect(recipeFetchReducer(state, { type: 'OTHER' })).toEqual({
      recipes: [],
      isLoading: false,
      isError: false,
    });
  });

  it(`returns an empty object for state if it us undefined
    and the action type is other than the above three`, () => {
    expect(recipeFetchReducer(undefined, { type: 'OTHER' })).toEqual({});
  });
});