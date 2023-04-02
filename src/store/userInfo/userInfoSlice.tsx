import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  name: '',
  mannerPoint: 0,
  location: '',
};

const userInfoSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    userName(state, action) {
      state.name = action.payload;
    },
    getMannerPoint(state, action) {
      state.mannerPoint = action.payload;
    },
    getLocation(state, action) {
      state.location = action.payload;
    },
  },
});

export const { userName, getMannerPoint, getLocation } = userInfoSlice.actions;
export default userInfoSlice.reducer;
