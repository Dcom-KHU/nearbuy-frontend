import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  active: null,
};

// 현재 active 상태인 페이지
// detailPageSlice라는 slice 생성하고 이름을 activePage라고 지정.
const detailPageSlice = createSlice({
  name: "activePage", // 생성되는 slice의 이름
  initialState, // slice의 초기 상태
  reducers: {
    // slice에서 사용할 reducer 함수 정의
    isActive(state, action) {
      // state과 action 매개변수 받아서 state의 active property 값을 action.payload 값으로 변경하는 역할
      state.active = action.payload;
    },
  },
});

// reduc에서 사용 될 때 isActive 리듀서 함수를 호출하면서 액션 객체 전달하면,
//스토어의 state값을 active 프로퍼티가 업데이트됨

export const { isActive } = detailPageSlice.actions;
export default detailPageSlice.reducer;
