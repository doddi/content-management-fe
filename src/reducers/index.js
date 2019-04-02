import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import customersReducer from './customersReducer';
import signInReducer from './signInReducer';

export default combineReducers({
  customers: customersReducer,
  authenticationStatus: signInReducer,
  form: formReducer
});
