import { createSlice } from '@reduxjs/toolkit';
import { logOut } from 'redux/auth/operations';
import {
  fetchAllReviews,
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
    reviews: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllReviews.pending, pending)
      .addCase(fetchUserReviews.pending, pending)
      .addCase(addReview.pending, pending)
      .addCase(deleteReview.pending, pending)
      .addCase(updateReview.pending, pending)
      .addCase(fetchAllReviews.rejected, rejected)
      .addCase(fetchUserReviews.rejected, rejected)
      .addCase(addReview.rejected, rejected)
      .addCase(deleteReview.rejected, rejected)
      .addCase(updateReview.rejected, rejected)
      .addCase(fetchAllReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(fetchUserReviews.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.reviews = action.payload;
      })
      .addCase(addReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.reviews.push(action.payload);
      })
      .addCase(deleteReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        // const index = state.reviews.findIndex(review => {
        //   return review._id === action.payload.data._id;
        // });

        // state.reviews.splice(index, 1);
      })
      .addCase(updateReview.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;

        const index = state.reviews.findIndex(review => {
          return review._id === action.payload.data._id;
        });

        state.reviews[index] = action.payload.data;
      })
      .addCase(logOut.fulfilled, state => {
        state.reviews = [];
        state.error = null;
        state.isLoading = false;
      });
  },
});
