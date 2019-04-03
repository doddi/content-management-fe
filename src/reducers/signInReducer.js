import { SIGN_IN, SIGN_OUT, AUTH_USER } from '../actions';
import { setAuthToken } from '../apis/backend';

function decodeToken(token) {
  let body = JSON.parse(window.atob(token.split('.')[1]));
  return body.sub;
}

// Updates the state determining if a user is currently logged in our out
export default (state = {}, action) => {
  switch (action.type) {
    case SIGN_IN:
      // Sets the authentication token for future communication to the backend
      setAuthToken(action.payload);

      return {
        ...state,
        isAuthenticated: true,
        userId: decodeToken(action.payload)
      };
    case SIGN_OUT:
      setAuthToken(null);
      return {
        ...state,
        isAuthenticated: false
      };
    case AUTH_USER:
      return {
        ...state,
        user: action.payload
      };
    default:
      return state;
  }
};
