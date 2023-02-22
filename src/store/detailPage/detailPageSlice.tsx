import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  sale: false,
  exchange: false,
  free: false,
  auction: false,
  group: false,
};

// detail page 판매, 교환, 나눔 상태 관리
// FIXME: 밑에 reducers 좀 더 간결하게, 깔끔하게 할 순 없을까?
const detailPageSlice = createSlice({
  name: 'detailPage',
  initialState,
  reducers: {
    // action 값 받아서, 해당 페이지 정보 받아 해당 state만 true, 나머진 false로 하고 싶었지만, 그 state 제외 나머지 state를 한 꺼번에 false로 바꾸는 방법을 몰라서 일단 보류,,
    // onPage(state, action) {
    //   let nowOnPage;
    //   if (action.payload === 'sale') {
    //     nowOnPage = 'sale';
    //   } else if (action.payload === 'exchange') {
    //     nowOnPage = 'exchange';
    //   } else if (action.payload === 'free') {
    //     nowOnPage = 'free';
    //   } else if (action.payload === 'auction') {
    //     nowOnPage = 'auction';
    //   } else if (action.payload === 'group') {
    //     nowOnPage = 'group';
    //   }
    // },

    // 판매 페이지
    isSale(state) {
      state.sale = true;
      state.exchange = false;
      state.free = false;
      state.auction = false;
      state.group = false;
    },
    // 교환 페이지
    isExchange(state) {
      state.sale = false;
      state.exchange = true;
      state.free = false;
      state.auction = false;
      state.group = false;
    },
    // 나눔 페이지
    isFree(state) {
      state.sale = false;
      state.exchange = false;
      state.free = true;
      state.auction = false;
      state.group = false;
    },
    // 경매 페이지
    isAuction(state) {
      state.sale = false;
      state.exchange = false;
      state.free = false;
      state.auction = true;
      state.group = false;
    },
    // 교환 페이지
    isGroup(state) {
      state.sale = false;
      state.exchange = false;
      state.free = false;
      state.auction = false;
      state.group = true;
    },
  },
});

export const detailPageActions = detailPageSlice.actions;
export default detailPageSlice;
