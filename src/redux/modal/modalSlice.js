import { createSlice } from '@reduxjs/toolkit';

export const modalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    toggleModal: (state, action) => {
      state.isOpen = !state.isOpen;
    },
  },
});

export const { toggleModal } = modalSlice.actions;
export default modalSlice.reducer;
