import { configureStore } from '@reduxjs/toolkit';
import menuToggleSlice from './menuToggle/menuToggleSlice';

const store = configureStore({
  reducer: {
    menuToggle: menuToggleSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export default store;
