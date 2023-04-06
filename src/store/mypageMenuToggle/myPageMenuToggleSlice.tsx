import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  myPosts: false,
  posts: false,
  favorites: false,
  reviews: false,
  prev: null,
};

const myPageMenuToggleSlice = createSlice({
  name: 'myPageMenuToggle',
  initialState,
  reducers: {
    myPageMenuToggle(state, action) {
      if (state.prev === action.payload) {
        state[action.payload] = !state[action.payload];
      } else {
        Object.keys(state).forEach((elem) => {
          state[elem] = elem === action.payload;
        });
        state.prev = action.payload;
      }
    },
  },
});

export const { myPageMenuToggle } = myPageMenuToggleSlice.actions;
export default myPageMenuToggleSlice.reducer;
