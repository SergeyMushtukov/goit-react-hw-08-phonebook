import axios from 'axios';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

async function registerService(credentials) {
  const { data } = await axios.post('/users/signup', credentials);
  return data;
}

//----------------------

async function logInService(credentials) {
  const { data } = await axios.post('/users/login', credentials);
  return data;
}

//----------------------

async function logOutService() {
  await axios.post('/users/logout');
}

//----------------------

async function fetchCurrentUserService() {
  const { data } = await axios.get('/users/current');
  return data;
}

//----------------------

const authApi = {
  registerService,
  logInService,
  logOutService,
  fetchCurrentUserService,
};

export default authApi;
