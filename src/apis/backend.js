import axios from 'axios';

const URL = 'http://localhost:8080/api/';

let currentAuthToken = null;

export function setToken(token) {
  currentAuthToken = token;
}

export function getApi() {
  return axios.create({
    baseURL: `${URL}`,
    headers: {
      Authorization: `Bearer ${currentAuthToken}`
    }
  });
}
