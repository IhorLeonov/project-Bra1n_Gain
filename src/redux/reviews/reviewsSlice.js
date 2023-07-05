import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchUserReviews,
  addReview,
  updateReview,
  deleteReview,
} from './operations';

const pending = state => {
  state.isLoading = true;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const reviewsSlice = createSlice({
  name: 'reviews',
  initialState: {
    reviews: {},
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchUserReviews.pending, pending)
      .addCase(addReview.pending, pending)
      .addCase(deleteReview.pending, pending)
      .addCase(updateReview.pending, pending)
      .addCase(fetchUserReviews.rejected, rejected)
      .addCase(addReview.rejected, rejected)
      .addCase(deleteReview.rejected, rejected)
      .addCase(updateReview.rejected, rejected)
      .addCase(fetchUserReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews = action.payload;
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = {}
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(logOut.fulfilled, state => {
        state.reviews = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});
