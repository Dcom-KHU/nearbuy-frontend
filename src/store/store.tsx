import { configureStore } from '@reduxjs/toolkit';
import menuToggleSlice from './menuToggle/menuToggleSlice';
import searchToggleSlice from './searchToggle/searchToggleSlice';

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice.reducer,
    searchToggle: searchToggleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
