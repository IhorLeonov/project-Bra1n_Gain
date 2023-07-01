// import { createAsyncThunk } from '@reduxjs/toolkit';
// import axios from 'axios';
// import { selectUser } from 'redux/theme/selectors';

// axios.defaults.baseURL = 'https://goosetrack-backend-2lsp.onrender.com/api';

// export const getTasks = createAsyncThunk(
//   'tasks/getAll',
//   async (_, thunkAPI) => {
//     try {
//       const { id } = selectUser();
//       const res = await axios.get(`/task/${id}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const addTask = createAsyncThunk(
//   'tasks/addTask',
//   async (newTask, thunkAPI) => {
//     try {
//       const res = await axios.post('/task', newTask);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const updateTask = createAsyncThunk(
//   'tasks/updateTask',
//   async ({ taskId, newTask }, thunkAPI) => {
//     try {
//       const res = await axios.patch(`/task/${taskId}`, newTask);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );

// export const deleteTask = createAsyncThunk(
//   'tasks/deleteTask',
//   async (taskId, thunkAPI) => {
//     try {
//       const res = await axios.delete(`/task/${taskId}`);
//       return res.data;
//     } catch (error) {
//       return thunkAPI.rejectWithValue(error.message);
//     }
//   }
// );
