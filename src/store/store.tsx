import { configureStore } from '@reduxjs/toolkit';
import chatToggleSlice from './chatToggle/chatToggleSlice';
import activePageSlice from './detailPage/activePageSlice';
import loggedInSlice from './loggedIn/loggedInSlice';
import menuToggleSlice from './menuToggle/menuToggleSlice';
import myPageMenuToggleSlice from './mypageMenuToggle/myPageMenuToggleSlice';
import priceSlice from './price/priceSlice';
import saveTokenSlice from './saveToken/saveTokenSlice';
import searchToggleSlice from './searchToggle/searchToggleSlice';
import userInfoSlice from './userInfo/userInfoSlice';

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice,
    searchToggle: searchToggleSlice,
    myPageMenuToggle: myPageMenuToggleSlice,
    price: priceSlice,
    activePage: activePageSlice,
    chatToggle: chatToggleSlice,
    loggedIn: loggedInSlice,
    saveToken: saveTokenSlice,
    userInfo: userInfoSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
