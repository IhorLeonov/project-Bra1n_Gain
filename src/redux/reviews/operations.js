import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { toast } from 'react-hot-toast';

const instance = axios.create({
  baseURL: 'https://bra1n-gain-backend.onrender.com/api',
});

const setAuthHeader = token => {
  instance.defaults.headers.common['Authorization'] = `Bearer ${token}`;
};

export const fetchUserReviews = createAsyncThunk(
  'reviews/fetchUserReviews',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);
    try {
      setAuthHeader(persistedToken);
      const response = await instance.get('/reviews/own');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ rate, comment }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);
    try {
      const response = await instance.post('/reviews/own', {
        rate,
        comment,
      });

      toast('Review added!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async ({ rate, comment }, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);
    try {
      const response = await instance.patch('/reviews/own', {
        rate,
        comment,
      });

      toast('Review has been edited');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = state.auth.token;
    setAuthHeader(persistedToken);
    try {
      const response = await instance.delete('/reviews/own');

      toast('Review deleted!');
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);