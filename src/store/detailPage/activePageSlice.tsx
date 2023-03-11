import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  active: null,
};

// 현재 active 상태인 페이지
const detailPageSlice = createSlice({
  name: 'activePage',
  initialState,
  reducers: {
    isActive(state, action) {
      state.active = action.payload;
    },
  },
});

export const { isActive } = detailPageSlice.actions;
export default detailPageSlice.reducer;
