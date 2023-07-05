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

export const register = createAsyncThunk('auth/register', async credentials => {
  try {
    const res = await axios.post('/api/users/register', credentials);
    setAuthHeader(res.data.token);
    ToasterNotify('AccountСreated');
    return res.data;
  } catch (error) {
    ToasterNotify(error.response.data.message);
  }
});

export const logIn = createAsyncThunk('auth/login', async credentials => {
  try {
    const res = await axios.post('/api/users/login', credentials);
    setAuthHeader(res.data.token);
    ToasterNotify('LoginSuccessful');
    return res.data;
  } catch (error) {
    ToasterNotify('Password or email is incorrect.');
  }
});

export const logOut = createAsyncThunk('auth/logout', async (_, thunkAPI) => {
  try {
    await axios.post('/api/users/logout');
    clearAuthHeader();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  'auth/refresh',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.get('/api/users/current');
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateUser = createAsyncThunk(
  'auth/profile',
  async (userData, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to update user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch('/api/users/profile', userData);
      return res.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changePassord = createAsyncThunk(
  'user/profile/pass',
  async (data, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue('Unable to fetch user');
    }

    try {
      setAuthHeader(persistedToken);
      const res = await axios.patch('/api/users/profile/pass', data);
      console.log(res.status);
      console.log(res.data.message);
      return res.status;
    } catch (error) {
      console.log(error.message);
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
