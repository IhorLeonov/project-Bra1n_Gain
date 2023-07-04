import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const instance = axios.create({
  baseURL: 'https://bra1n-gain-backend.onrender.com/api',
});

export const fetchAllReviews = createAsyncThunk(
  'reviews/fetchAllReviews',
  async (_, thunkAPI) => {
    try {
      const response = await instance.get('/reviews');

    const reviewsNewArray = response.data.map(e => ({
        ...e,
        name: e.owner.name,
        avatarUrl: e.owner.avatarUrl,
        owner: e.owner._id
      }))

      return reviewsNewArray;
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
      const response = await instance.patch(`/reviews/own`, {
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
