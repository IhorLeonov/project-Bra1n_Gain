import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
    modalType: '',
    modalAction: '',
    dataTask: {},
    category: '',
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
    setModalTypeTeam: (state, action) => {
      state.modalType = 'team';
    },
    setModalTypeResendMail: (state, action) => {
      state.modalType = 'resend-mail';
    },
    setModalAction: (state, { payload }) => {
      state.modalAction = payload;
    },
    setDataTask: (state, { payload }) => {
      state.dataTask = payload;
    },
    setCategory: (state, { payload }) => {
      state.category = payload;
    },
  },
});

export const {
  toggleModal,
  setModalTypeFeedback,
  setModalTypeTask,
  setModalTypeTeam,
  setModalTypeResendMail,
  setModalAction,
  setCategory,
  setDataTask,
} = modalSlice.actions;
export const modalReducer = modalSlice.reducer;
