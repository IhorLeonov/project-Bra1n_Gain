import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { operations } from './operations';
import { theme } from 'constants/Theme';

const STORAGE_KEY = 'theme';

const initialState = {
  userTheme: {
    light: 'light',
    dark: 'dark',
  },
};

export const refreshTheme = createAsyncThunk('theme/refreshTheme', async () => {
  const mode = localStorage.getItem(STORAGE_KEY);
  return mode || theme.light;
});

export const setTheme = createAsyncThunk('theme/setTheme', async (payload) => {
  localStorage.setItem(STORAGE_KEY, payload);
  return payload;
});

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(refreshTheme.fulfilled, (state, action) => {
        state.mode = action.payload;
      })
      .addCase(setTheme.fulfilled, (state, action) => {
        state.mode = action.payload;
      })
      .addMatcher(
       
          operations.logoutUser.fulfilled,
          operations.logoutUser.rejected
        ,
        (state) => {
          localStorage.setItem(STORAGE_KEY, theme.light);
        }
      );
  },
});

export const { actions: themeActions } = themeSlice;

export const themeReducer = themeSlice.reducer;
