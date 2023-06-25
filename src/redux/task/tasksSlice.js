import { createSlice } from '@reduxjs/toolkit';
import { logOut } from '../auth/operations';
import {
  fetchAllTasks,
  fetchTaskById,
  addTask,
  deleteTask,
  updateTask,
  changeTaskCategory,
  clearTasks,
} from './operations.js';

const pending = state => {
  state.isLoading = true;
  state.successful = false;
};

const rejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: {
    tasks: [],
    isLoading: false,
    error: null,
    successful: false,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchAllTasks.pending, pending)
      .addCase(fetchTaskById.pending, pending)
      .addCase(addTask.pending, pending)
      .addCase(deleteTask.pending, pending)
      .addCase(updateTask.pending, pending)
      .addCase(changeTaskCategory.pending, pending)
      .addCase(fetchAllTasks.rejected, rejected)
      .addCase(fetchTaskById.rejected, rejected)
      .addCase(addTask.rejected, rejected)
      .addCase(deleteTask.rejected, rejected)
      .addCase(updateTask.rejected, rejected)
      .addCase(changeTaskCategory.rejected, rejected)
      .addCase(fetchAllTasks.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        state.tasks = action.payload.data;
      })
      .addCase(fetchTaskById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        state.tasks = action.payload.data;
      })
      .addCase(addTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        state.tasks.push(action.payload.data);
      })
      .addCase(deleteTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;

        const index = state.tasks.findIndex(
          elem => elem._id === action.payload.data._id
        );
        state.tasks.splice(index, 1);
      })
      .addCase(updateTask.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        const index = state.tasks.findIndex(
          elem => elem._id === action.payload.data._id
        );

        state.tasks[index] = action.payload.data;
      })
      .addCase(logOut.fulfilled, state => {
        state.tasks = [];
        state.error = null;
        state.successful = false;
        state.isLoading = false;
      })
      .addCase(changeTaskCategory.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.successful = true;
        const index = state.tasks.findIndex(
          elem => elem._id === action.payload.data._id
        );

        state.tasks[index] = action.payload.data;
      })
      .addCase(clearTasks.fulfilled, state => {
        state.tasks = [];
      });
  },
});
