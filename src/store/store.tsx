import { configureStore } from '@reduxjs/toolkit';
import chatToggleSlice from './chatToggle/chatToggleSlice';
import activePageSlice from './detailPage/activePageSlice';
import loggedInSlice from './loggedIn/loggedInSlice';
import menuToggleSlice from './menuToggle/menuToggleSlice';
import myPageMenuToggleSlice from './mypageMenuToggle/myPageMenuToggleSlice';
import priceSlice from './price/priceSlice';
import searchToggleSlice from './searchToggle/searchToggleSlice';

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice,
    searchToggle: searchToggleSlice,
    myPageMenuToggle: myPageMenuToggleSlice,
    price: priceSlice,
    activePage: activePageSlice,
    chatToggle: chatToggleSlice,
    loggedIn: loggedInSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
