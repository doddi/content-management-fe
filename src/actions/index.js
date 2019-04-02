import { getApi, setToken } from '../apis/backend';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

export const fetchCustomers = page => async (dispatch, getState) => {
  const response = await getApi().get('/customer/', {
    params: {
      page: `${page}`
    }
  });

  dispatch({
    type: FETCH_CUSTOMERS,
    payload: response.data
  });
};

export const trySignIn = (username, password) => async dispatch => {
  const response = await getApi().post('/user/signin', {
    username: username,
    password: password
  });

  setToken(response.data.token);

  dispatch({
    type: SIGN_IN
  });
};

export const trySignOut = () => async dispatch => {
  const response = await getApi().post('/user/signout');

  dispatch({
    type: SIGN_OUT
  });
};
