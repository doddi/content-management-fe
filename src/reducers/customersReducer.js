import _ from 'lodash';
import { FETCH_CUSTOMERS } from '../actions';

export default (state = {}, action) => {
  switch (action.type) {
    case FETCH_CUSTOMERS:
      // Produces a list of customer objects using the id as key
      return _.mapKeys(action.payload.content, 'id');
    default:
      return state;
  }
};
