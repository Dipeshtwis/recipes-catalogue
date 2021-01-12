import { getCategoriesAction } from '../../actions/index';
import categoriesReducer from '../../reducers/categories';

describe('categoriesReducer', () => {
  it(`returns the action payload (array of categories)
    if action is of type "CATEGORIES"`, () => {
    expect(categoriesReducer(null, getCategoriesAction(['chicken']))).toEqual(['chicken']);
  });

  it('returns the state if the action is not "CATEGORIES"', () => {
    expect(categoriesReducer('state', { type: 'OTHER' })).toEqual('state');
  });

  it('returns default props (array) if state is undefined and the action is not "CATEGORIES"', () => {
    expect(categoriesReducer(undefined, { type: 'OTHER' })).toEqual([]);
  });
});
