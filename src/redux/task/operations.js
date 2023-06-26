import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

const instance = axios.create({
  baseURL: 'https://bra1n-gain-backend.onrender.com/api',
});

export const fetchAllTasks = createAsyncThunk(
  'tasks/fetchAllTasks',
  async (date, thunkAPI) => {
    try {
      let filter = `?month=${date}`;
      if (date) {
      }

      const response = await instance.get(`/tasks${filter}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const fetchTaskById = createAsyncThunk(
  'tasks/fetchTaskById',
  async (id, thunkAPI) => {
    try {
      const response = await instance.get(`/tasks/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const addTask = createAsyncThunk(
  'tasks/addTask',
  async ({ title, date, start, end, priority, category }, thunkAPI) => {
    try {
      const response = await instance.post('/tasks', {
        title,
        date,
        start,
        end,
        priority,
        category,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const deleteTask = createAsyncThunk(
  'tasks/deleteTask',
  async (id, thunkAPI) => {
    try {
      const response = await instance.delete(`/tasks/${id}`);

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const updateTask = createAsyncThunk(
  'tasks/updateTask',
  async ({ id, title, date, start, end, priority, category }, thunkAPI) => {
    try {
      const response = await instance.put(`/tasks/${id}`, {
        title,
        date,
        start,
        end,
        priority,
        category,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const changeTaskCategory = createAsyncThunk(
  'tasks/changeTaskCategory',
  async ({ id, category }, thunkAPI) => {
    try {
      const response = await instance.patch(`/tasks/${id}/category`, {
        category,
      });

      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const clearTasks = createAsyncThunk(
  'tasks/clearTasks',
  async (_, thunkAPI) => {
    return true;
  }
);
