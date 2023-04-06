import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  loggedIn: false,
};

const loggedInSlice = createSlice({
  name: 'loggedIn',
  initialState,
  reducers: {
    loggedIn(state) {
      state.loggedIn = true;
    },
    loggedOut(state) {
      state.loggedIn = false;
    },
  },
});

export const { loggedIn, loggedOut } = loggedInSlice.actions;
export default loggedInSlice.reducer;
