import { createSlice } from '@reduxjs/toolkit';
import { getTasks, addTask, updateTask, deleteTask } from './operations';

const handlePending = state => {
  state.isLoading = true;
};

const handleFulfilled = state => {
  state.isLoading = false;
  state.error = null;
};

const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  extraReducers: {
    [getTasks.pending]: handlePending,
    [getTasks.fulfilled](state, { payload }) {
      handleFulfilled(state);
      state.items = payload;
    },
    [getTasks.rejected]: handleRejected,
    [addTask.pending]: handlePending,
    [addTask.fulfilled](state, { payload }) {
      handleFulfilled(state);
      state.items.push(payload);
    },
    [addTask.rejected]: handleRejected,
    [updateTask.pending]: handlePending,
    [updateTask.fulfilled](state, { payload }) {
      handleFulfilled(state);
      const idx = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(idx, 1, payload);
    },
    [updateTask.rejected]: handleRejected,
    [deleteTask.pending]: handlePending,
    [deleteTask.fulfilled](state, { payload }) {
      handleFulfilled(state);
      const idx = state.items.findIndex(({ id }) => id === payload.id);
      state.items.splice(idx, 1);
    },
    [deleteTask.rejected]: handleRejected,
  },
});

export const tasksReducer = tasksSlice.reducer;