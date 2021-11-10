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
  const { email, password } = credentials;
  const { data } = await axios.post('/auth/signup', credentials);
  if (data.status === 'success') {
    const user = await logInUser({ email, password });
    console.log('signUp', user);
    return user;
  }
}

export async function logInUser(credentials) {
  const { data } = await axios.post(`/auth/login`, credentials);
  token.set(data.data.user.token);
  console.log('logIn', data.data.user);
  return data.data.user;
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
