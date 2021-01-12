import { FILTER } from '../actions/index';

const recipesFilterReducer = (state = '', action) => {
  switch (action.type) {
    case FILTER:
      return action.payload;
    default:
      return state;
  }
};

export default recipesFilterReducer;
