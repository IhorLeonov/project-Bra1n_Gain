import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { operations } from './operations'
import { theme } from 'constants/Theme';

const STORAGE_KEY = 'theme';

const initialState = {
  userTheme: {
    light: 'light',
    dark: 'dark',
  },
 };

const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    refreshTheme: state => {
      state.mode = localStorage.getItem(STORAGE_KEY);
    },
    setTheme: (state, { payload }) => {
      state.mode = payload;
      localStorage.setItem(STORAGE_KEY, payload);
    },
  },
  extraReducers: builder => {
    builder.addMatcher(
      isAnyOf(
        operations.endpoints.logoutUser.matchFulfilled,
        operations.endpoints.logoutUser.matchRejected
      ),
      () => {
        localStorage.setItem(STORAGE_KEY, theme.light);
      }
    );
  },
});

export const { setTheme, refreshTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;