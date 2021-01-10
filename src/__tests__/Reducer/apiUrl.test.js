import { filterRecipesAction, getRecipeAction } from '../../actions/index';
import apiUrlReducer from '../../reducers/apiUrl';

describe('apiUrlReducer', () => {
  describe('FILTER', () => {
    it('returns a url formatted to query a given category', () => {
      expect(apiUrlReducer('', filterRecipesAction('Chicken')))
        .toEqual('https://www.themealdb.com/api/json/v1/1/filter.php?c=Chicken');
    });
  });

  describe('RECIPE', () => {
    it('returns a url formatted to retrieve a given item by its ID', () => {
      expect(apiUrlReducer('', getRecipeAction(527794)))
        .toEqual('https://www.themealdb.com/api/json/v1/1/lookup.php?i=527794');
    });
  });

  it('returns the state if the action passed is not expected', () => {
    expect(apiUrlReducer('state', { type: 'OTHER' }))
      .toEqual('state');
  });

  it(`returns a default props (string) if it is undefined
    and the action passed is not expected`, () => {
    expect(apiUrlReducer(undefined, { type: 'OTHER' }))
      .toEqual('');
  });
});