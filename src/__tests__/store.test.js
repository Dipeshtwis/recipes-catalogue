import configureStore from 'redux-mock-store';
import { getCategoriesAction } from '../actions/index';

const middlewares = [];
const mockStore = configureStore(middlewares);

it('should dispatch action', () => {
  const initialState = {};
  const store = mockStore(initialState);

  store.dispatch(getCategoriesAction());
  const actions = store.getActions();
  const expectedPayload = { type: 'CATEGORIES' };
  expect(actions).toEqual([expectedPayload]);
});
