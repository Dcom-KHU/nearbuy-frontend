import { createSlice } from '@reduxjs/toolkit';

const menuToggleSlice = createSlice({
  name: 'menuToggle',
  initialState: { toggle: false },
  reducers: {
    menuToggle(state) {
      state.toggle = !state.toggle;
    },
    closeMenu(state) {
      state.toggle = false;
    },
  },
});

export const menuToggleActions = menuToggleSlice.actions;
export default menuToggleSlice;
