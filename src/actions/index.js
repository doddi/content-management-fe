import { getApi, getApiWithToken } from '../apis/backend';

export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';
export const AUTH_USER = 'AUTH_USER';

export const FETCH_USERS = 'FETCH_USERS';
export const FETCH_USER = 'FETCH_USER';

export const FETCH_CUSTOMERS = 'FETCH_CUSTOMERS';

export const fetchAuthenticatedUserDetailsOnSign = (
  username,
  password
) => async (dispatch, getState) => {
  await dispatch(trySignIn(username, password));

  let userId = getState().authenticationStatus.userId;

  dispatch(fetchAuthenticatedUser(userId));
};

export const trySignIn = (username, password) => async dispatch => {
  const response = await getApi().post('/user/signin', {
    username: username,
    password: password
  });

  dispatch({
    type: SIGN_IN,
    payload: response.data.token
  });
};

export const trySignOut = () => {
  return {
    type: SIGN_OUT
  };
};

export const fetchAuthenticatedUser = id => async dispatch => {
  const response = await getApiWithToken().get(`/user/${id}`);

  dispatch({
    type: AUTH_USER,
    payload: response.data
  });
};

export const fetchUsers = () => async dispatch => {
  const response = await getApiWithToken().get('/user');

  dispatch({
    type: FETCH_USERS,
    payload: response.data
  });
};

export const fetchUser = id => async dispatch => {
  const response = await getApiWithToken().get(`/user/${id}`);

  dispatch({
    type: FETCH_USER,
    payload: response.data
  });
};

export const fetchCustomers = page => async (dispatch, getState) => {
  const response = await getApiWithToken().get('/customer/', {
    params: {
      page: `${page}`
    }
  });

  dispatch({
    type: FETCH_CUSTOMERS,
    payload: response.data
  });
};
