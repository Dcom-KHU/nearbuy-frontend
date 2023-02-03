import { createSlice } from '@reduxjs/toolkit';

const searchToggleSlice = createSlice({
  name: 'searchToggle',
  initialState: { toggle: false },
  reducers: {
    searchToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const searchToggleActions = searchToggleSlice.actions;
export default searchToggleSlice;