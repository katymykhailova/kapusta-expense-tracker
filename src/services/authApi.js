import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3000/api`;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};

export async function signUpUser(credentials) {
  const { data } = await axios.post('/auth/signup', credentials);
  return data.data.result;
}

export async function logInUser(credentials) {
  const { data } = await axios.post(`/auth/login`, credentials);
  token.set(data.data.token);
  return data.data;
}

export async function logOutUser() {
  await axios.post(`/auth/logout`);
  token.unset();
}

export async function fetchCurrentUser(savedToken) {
  token.set(savedToken);
  const { data } = await axios.get(`/auth/current`);
  return data;
}
