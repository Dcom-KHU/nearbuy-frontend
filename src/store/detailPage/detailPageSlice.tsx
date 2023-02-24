import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface DetailPageState {
  board: boolean;
  sale: boolean;
  exchange: boolean;
  free: boolean;
  auction: boolean;
  group: boolean;
}

const initialState: DetailPageState = {
  board: false,
  sale: false,
  exchange: false,
  free: false,
  auction: false,
  group: false,
};

const detailPageSlice = createSlice({
  name: 'detailPage',
  initialState,
  reducers: {
    setIsType(state, action: PayloadAction<keyof DetailPageState>) {
      Object.keys(state).forEach((key) => {
        state[key as keyof DetailPageState] = false;
      });
      state[action.payload] = true;
    },
  },
});

export const { setIsType } = detailPageSlice.actions;
export default detailPageSlice.reducer;
