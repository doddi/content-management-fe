import { SIGN_IN, SIGN_OUT } from '../actions';
import { setAuthToken } from '../apis/backend';

// Updates the state determining if a user is currently logged in our out
export default (state = null, action) => {
  switch (action.type) {
    case SIGN_IN:
      // Sets the authentication token for future communication to the backend
      setAuthToken(action.token);
      return true;
    case SIGN_OUT:
      setAuthToken(null);
      return false;
    default:
      return state;
  }
};
