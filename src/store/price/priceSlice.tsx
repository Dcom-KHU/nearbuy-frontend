import { createSlice } from '@reduxjs/toolkit';

const initialState = { price: 1000, increment: 100, members: 4 };

const priceSlice = createSlice({
  name: 'price',
  initialState,
  reducers: {
    // 글 작성자로부터 가격 입력 받음
    getPrice(state, action) {
      state.price = action.payload;
    },
    // (경매 한정) 글 작성자로부터 가격 증가량 입력 받음
    getIncrement(state, action) {
      state.increment = action.payload;
    },
    // (공구 한정) 글 작성자로부터 모집 인원 입력 받음
    getMembers(state, action) {
      state.members = action.payload;
    },
  },
});

export const { getPrice, getIncrement, getMembers } = priceSlice.actions;
export default priceSlice.reducer;
