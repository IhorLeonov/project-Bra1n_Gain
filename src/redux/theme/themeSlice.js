import { createSlice, isAnyOf } from '@reduxjs/toolkit';
import { authApi } from 'redux/auth/authApi';
import { THEME_OPTIONS } from 'constants/Theme';

const STORAGE_KEY = 'theme';

const initialState = { mode: THEME_OPTIONS.light };

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
        authApi.endpoints.logoutUser.matchFulfilled,
        authApi.endpoints.logoutUser.matchRejected
      ),
      () => {
        localStorage.setItem(STORAGE_KEY, THEME_OPTIONS.light);
      }
    );
  },
});

export const { setTheme, refreshTheme } = themeSlice.actions;

export const themeReducer = themeSlice.reducer;