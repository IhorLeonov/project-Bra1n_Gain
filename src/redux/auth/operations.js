import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { ToasterNotify } from 'components/Notify/Notify';

axios.defaults.baseURL = 'https://bra1n-gain-backend.onrender.com';

const setAuthHeader = token => {
  axios.defaults.headers.common.Authorization = `Bearer ${token}`;
};

const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export const register = createAsyncThunk(
  'auth/register',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/register', credentials);
      // After successful registration, add the token to the HTTP header
      setAuthHeader(res.data.token);
      ToasterNotify('AccountСreated');
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue();
      return ToasterNotify('AccountСreatedFail');
    }
  }
);

export const logIn = createAsyncThunk(
  'auth/login',
  async (credentials, thunkAPI) => {
    try {
      const res = await axios.post('/users/login', credentials);
      // After successful login, add the token to the HTTP header
      setAuthHeader(res.data.token);
      ToasterNotify('LoginSuccessful');
      return res.data;
    } catch (error) {
      thunkAPI.rejectWithValue();
      return ToasterNotify('LoginFail');
    }
  }
);

/*
 * POST @ /users/logout
 * headers: Authorization: Bearer token
 */
export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/users/logout');
    // After a successful logout, remove the token from the HTTP header
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

/*
 * GET @ /users/current
 * headers: Authorization: Bearer token
 */
export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.get('/users/current');
      // console.log(res);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

/*
 * PATCH @ /users/profile
 * headers: Authorization: Bearer token
 */
export const updateUser = createAsyncThunk(
  'auth/profile',
  async (userData, thunkAPI) => {
    // Reading the token from the state via getState()
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      // If there is no token, exit without performing any request
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      // If there is a token, add it to the HTTP header and perform the request
      setAuthHeader(persistedToken);
      const res = await axios.patch('/users/profile', userData);
      // console.log(res.data.data);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
