import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import authAPI from 'services/auth-api';

function setToken(token) {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
}

function unsetToken() {
  axios.defaults.headers.common.Authorization = '';
}

const register = createAsyncThunk('auth/register', async (credentials, thunkAPI) => {
  try {
    const data = await authAPI.registerService(credentials);
    setToken(data.token);
    return data;
  } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
});

const logIn = createAsyncThunk('auth/login', async (credentials, thunkAPI) => {
  try {
    const data = await authAPI.logInService(credentials);
    setToken(data.token);
    return data;
  } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
});

const logOut = createAsyncThunk('auth/logout', async (thunkAPI) => {
  try {
    await authAPI.logOutService()
    unsetToken();
  } catch (e) {
        return thunkAPI.rejectWithValue(e.message);
      }
});

const fetchCurrentUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    }

    setToken(persistedToken);
    try {
      const data  = authAPI.fetchCurrentUserService();
      return data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

const authOperations = {
  register,
  logIn,
  logOut,
  fetchCurrentUser,
};
export default authOperations;