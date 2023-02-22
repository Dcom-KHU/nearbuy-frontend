import { configureStore } from '@reduxjs/toolkit';
import detailPageSlice from './detailPage/detailPageSlice';
import menuToggleSlice from './menuToggle/menuToggleSlice';
import myPageMenuToggleSlice from './mypageMenuToggle/myPageMenuToggleSlice';
import searchToggleSlice from './searchToggle/searchToggleSlice';

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice.reducer,
    searchToggle: searchToggleSlice.reducer,
    myPageMenuToggle: myPageMenuToggleSlice.reducer,
    detailPage: detailPageSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
