import { createSlice } from '@reduxjs/toolkit';

import {
  register,
  logIn,
  logOut,
  refreshUser,
  updateUser,
  verifyEmail,
} from './operations';

import i18n from 'i18n';

const initialState = {
  user: { name: null, email: null },
  token: null,
  isRegistered: false,
  isVerified: false,
  isLoggedIn: false,
  isRefreshing: false,
  theme: true,
  language: 'en',
  sideBarShown: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    toggleTheme: state => {
      state.theme = !state.theme;
    },
    toggleLanguage: state => {
      switch (state.language) {
        case 'en':
          state.language = 'uk';
          i18n.changeLanguage(state.language);
          break;
        case 'uk':
          state.language = 'en';
          i18n.changeLanguage(state.language);
          break;
        default:
          state.language = 'en';

      }
    },
    toggleSideBar: state => {
      state.sideBarShown = !state.sideBarShown;
    },
    verifyUser: state => {
      state.isVerified = false;
    },
  },
  extraReducers: builder =>
    builder
      .addCase(register.fulfilled, (state, action) => {
        if (action.payload) {
          state.isRegistered = true;
        }
      })
      .addCase(verifyEmail.fulfilled, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
        state.isLoggedIn = true;
        state.isVerified = true;
      })
      .addCase(logIn.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload.user;
          state.token = action.payload.token;
          state.isLoggedIn = true;
        }
      })
      .addCase(logOut.fulfilled, state => {
        state.user = { name: null, email: null };
        state.token = null;
        state.isLoggedIn = false;
      })
      .addCase(refreshUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(refreshUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = { ...state.user, ...action.payload.user };
          state.isLoggedIn = true;
          state.isRefreshing = false;
          state.isRegistered = true;
        }
      })
      .addCase(refreshUser.rejected, state => {
        state.isRefreshing = false;
      })
      .addCase(updateUser.pending, state => {
        state.isRefreshing = true;
      })
      .addCase(updateUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.user = action.payload;
          state.isLoggedIn = true;
          state.isRefreshing = false;
        }
      })
      .addCase(updateUser.rejected, state => {
        state.isRefreshing = false;
      }),
});

export const authReducer = authSlice.reducer;
export const { toggleTheme, toggleSideBar, toggleLanguage } = authSlice.actions;
