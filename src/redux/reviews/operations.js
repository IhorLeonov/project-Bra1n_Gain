// import { instance } from 'redux/auth/operations';
// import { createAsyncThunk } from '@reduxjs/toolkit';

// export const fetchAllReviews = createAsyncThunk(
//   'reviews/fetchAllReviews',
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get('/reviews?page=1&limit=10');

//       return response.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const fetchUserReviews = createAsyncThunk(
//   'reviews/fetchUserReviews',
//   async (_, thunkAPI) => {
//     try {
//       const response = await instance.get('/reviews/my-reviews?limit=30');

//       return response.data.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
