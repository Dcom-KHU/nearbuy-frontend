import { createSlice } from '@reduxjs/toolkit';

const initialState = { price: 1000, increment: 100 };

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    // 글 작성자로 부터 가격 입력 받음
    getPrice(state, action) {
      state.price = action.payload;
    },
    // (경매 한정) 글 작성자로 부터 가격 증가량 입력 받음
    getIncrement(state, action) {
      state.increment = action.payload;
    },
  },
});

export const priceActions = priceSlice.actions;
export default priceSlice;
