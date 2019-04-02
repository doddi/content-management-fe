import { SIGN_IN, SIGN_OUT } from '../actions';

// Updates the state determining if a user is currently logged in our out
export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      return {
        signedIn: true,
        token: action.payload
      };
    case SIGN_OUT:
      return {
        signedIn: false
      };
    default:
      return state;
  }
};
