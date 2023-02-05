import { createSlice } from '@reduxjs/toolkit';

const myPageMenuToggleSlice = createSlice({
  name: 'myPageMenuToggle',
  initialState: { toggle: false },
  reducers: {
    myPageMenuToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const myPageMenuToggleActions = myPageMenuToggleSlice.actions;
export default myPageMenuToggleSlice;