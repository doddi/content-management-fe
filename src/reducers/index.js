import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import customersReducer from './customersReducer';
import authenticationReducer from './authenticationReducer';

export default combineReducers({
  customers: customersReducer,
  authenticationStatus: authenticationReducer,
  form: formReducer
});
