import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: '',
    modalAction: '',
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
    setModalAction: (state, action) => {
      state.modalAction = 'edit';
    },
  },
});

export const { toggleModal, setModalTypeFeedback, setModalTypeTask, setModalAction } = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
