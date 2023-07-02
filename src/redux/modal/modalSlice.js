import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: '',
    modalAction: '',
    dataTask: {}
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
    setModalTypeFeedback: (state, action) => {
      state.modalType = 'feedback';
    },
    setModalTypeTask: (state, action) => {
      state.modalType = 'task';
    },
    setModalAction: (state, {payload}) => {
      state.modalAction = payload;
    },
    setDataTask: (state, {payload}) => {
      state.dataTask = payload;
    },
  },
});

export const { toggleModal, setModalTypeFeedback, setModalTypeTask, setModalAction, setDataTask } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
