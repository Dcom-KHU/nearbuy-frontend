import { createSlice } from '@reduxjs/toolkit';

const menuToggleSlice = createSlice({
  name: 'menuToggle',
  initialState: { toggle: false },
  reducers: {
    menuToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const menuToggleActions = menuToggleSlice.actions;
export default menuToggleSlice;
