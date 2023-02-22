import { createSlice } from '@reduxjs/toolkit';

const menuToggleSlice = createSlice({
  name: 'menuToggle',
  initialState: { toggle: false },
  reducers: {
    // 햄버거 토글
    menuToggle(state) {
      state.toggle = !state.toggle;
    },
    // 특정 페이지 선택 시, 햄버거 토글 닫히도록 함
    closeMenu(state) {
      state.toggle = false;
    },
  },
});

export const menuToggleActions = menuToggleSlice.actions;
export default menuToggleSlice;
