import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  toggle: false,
};

const chatToggleSlice = createSlice({
  name: 'chatToggle',
  initialState,
  reducers: {
    toggleHandler(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const { toggleHandler } = chatToggleSlice.actions;
export default chatToggleSlice.reducer;
