import { filterRecipesAction } from '../../actions/index';
import recipesFilterReducer from '../../reducers/filter';

describe('recipesFilterReducer', () => {
  it('returns a category to filter when action is "FILTER"', () => {
    expect(recipesFilterReducer('', filterRecipesAction('Chicken'))).toEqual('Chicken');
  });

  it('returns the state if the action is not "FILTER"', () => {
    expect(recipesFilterReducer('state', { type: 'OTHER' })).toEqual('state');
  });

  it('returns an default props (string) if state is undefined and the action is not "FILTER', () => {
    expect(recipesFilterReducer(undefined, { type: 'OTHER' })).toEqual('');
  });
});
