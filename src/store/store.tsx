import { configureStore } from '@reduxjs/toolkit';
import detailPageSlice from './detailPage/detailPageSlice';
import menuToggleSlice from './menuToggle/menuToggleSlice';
import myPageMenuToggleSlice from './mypageMenuToggle/myPageMenuToggleSlice';
import priceSlice from './price/priceSlice';
import searchToggleSlice from './searchToggle/searchToggleSlice';

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice,
    searchToggle: searchToggleSlice,
    myPageMenuToggle: myPageMenuToggleSlice,
    detailPage: detailPageSlice,
    price: priceSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
