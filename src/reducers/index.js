import { combineReducers } from 'redux';
import customersReducer from './customersReducer';
import signInReducer from './signInReducer';

export default combineReducers({
  customers: customersReducer,
  authenticationStatus: signInReducer
});
