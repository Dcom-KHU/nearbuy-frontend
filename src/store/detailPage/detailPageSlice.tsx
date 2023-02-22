import { createSlice } from '@reduxjs/toolkit';

const initialState = { board: false, exchange: false, share: false };

// detail page 판매, 교환, 나눔 상태 관리
const detailPageSlice = createSlice({
  name: 'detailPage',
  initialState,
  reducers: {
    isBoard(state) {
      state.board = true;
      state.exchange = false;
      state.share = false;
    },
    isExchange(state) {
      state.board = false;
      state.exchange = true;
      state.share = false;
    },
    isShare(state) {
      state.board = false;
      state.exchange = false;
      state.share = true;
    },
  },
});

export const detailPageActions = detailPageSlice.actions;
export default detailPageSlice;
