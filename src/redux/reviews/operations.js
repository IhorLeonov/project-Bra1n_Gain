import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bra1n-gain-backend.onrender.com/api',
});

export const fetchAllReviews = createAsyncThunk(
  'reviews/fetchAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews/');

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchUserReviews = createAsyncThunk(
  'reviews/fetchUserReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews/own');

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addReview = createAsyncThunk(
  'reviews/addReview',
  async ({ rate, comment }, thunkAPI) => {
    try {
      const response = await instance.post('/reviews/own', {
        rate,
        comment,
      });

      return response.data.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateReview = createAsyncThunk(
  'reviews/updateReview',
  async ({ rate, comment }, thunkAPI) => {
    try {
      const response = await instance.put(`/reviews/own`, {
        rate,
        comment,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteReview = createAsyncThunk(
  'reviews/deleteReview',
  async (_, thunkAPI) => {
    try {
      const response = await instance.delete(`/reviews/own`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
