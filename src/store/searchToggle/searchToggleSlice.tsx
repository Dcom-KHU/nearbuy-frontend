import { createSlice } from '@reduxjs/toolkit';

// 검색창 토글
const searchToggleSlice = createSlice({
  name: 'searchToggle',
  initialState: { toggle: false },
  reducers: {
    searchToggle(state) {
      state.toggle = !state.toggle;
    },
  },
});

export const { searchToggle } = searchToggleSlice.actions;
export default searchToggleSlice.reducer;
