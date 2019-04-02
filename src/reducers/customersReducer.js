import { FETCH_CUSTOMERS } from '../actions';

export default (state = [], action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      return action.payload;
    default:
      return state;
  }
};
