import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const operations = createAsyncThunk(
  'auth/registerUser',
  async ({ name, email, password }) => {
    const response = await fetch('https://goose-tracker-backend.p.goit.global/user/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password }),
    });
    const data = await response.json();
    return data;
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async ({ email, password }) => {
    const response = await fetch('https://goose-tracker-backend.p.goit.global/user/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await response.json();
    return data;
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async () => {
    await fetch('https://goose-tracker-backend.p.goit.global/user/logout');
  }
);

export const getCurrentUserInfo = createAsyncThunk(
  'auth/getCurrentUserInfo',
  async () => {
    const response = await fetch('https://goose-tracker-backend.p.goit.global/user/info');
    const data = await response.json();
    return data;
  }
);

export const updateUserInfo = createAsyncThunk(
  'auth/updateUserInfo',
  async (data) => {
    const response = await fetch('https://goose-tracker-backend.p.goit.global/user/update', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });
    const responseData = await response.json();
    return responseData;
  }
);

const authSlice = createSlice({
  name: 'auth',
  initialState: {
    user: null,
    token: null,
    error: null,
    loading: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(operations.pending, (state) => {
        state.loading = true;
      })
      .addCase(operations.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(operations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(logoutUser.pending, (state) => {
        state.loading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.loading = false;
        state.user = null;
        state.token = null;
      })
      .addCase(logoutUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(getCurrentUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(getCurrentUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(getCurrentUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(updateUserInfo.pending, (state) => {
        state.loading = true;
      })
      .addCase(updateUserInfo.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload;
      })
      .addCase(updateUserInfo.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default authSlice.reducer;
