// import { createSlice } from '@reduxjs/toolkit';

// const initialState = {
//   sale: false,
//   exchange: false,
//   free: false,
//   auction: false,
//   group: false,
// };

// // detail page 판매, 교환, 나눔 상태 관리
// // FIXME: 밑에 reducers 좀 더 간결하게, 깔끔하게 할 순 없을까?
// const detailPageSlice = createSlice({
//   name: 'detailPage',
//   initialState,
//   reducers: {
//     setIsType(state, action) {
//       Object.keys(state).forEach((key) => {
//         state[key] = false;
//       });
//       state[action.payload] = true;
//     },
//   },
// });

// export const detailPageActions = detailPageSlice.actions;
// export default detailPageSlice;

// import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// interface DetailPageState {
//   sale: boolean;
//   exchange: boolean;
//   free: boolean;
//   auction: boolean;
//   group: boolean;
// }

// const initialState: DetailPageState = {
//   sale: false,
//   exchange: false,
//   free: false,
//   auction: false,
//   group: false,
// };

// const detailPageSlice = createSlice({
//   name: 'detailPage',
//   initialState,
//   reducers: {
//     setIsType(state, action: PayloadAction<keyof DetailPageState>) {
//       Object.keys(state).forEach((key) => {
//         state[key as keyof DetailPageState] = false;
//       });
//       state[action.payload] = true;
//     },
//   },
// });

// export const detailPageActions = detailPageSlice.actions;
// export default detailPageSlice;

import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface DetailPageState {
  sale: boolean;
  exchange: boolean;
  free: boolean;
  auction: boolean;
  group: boolean;
}

const initialState: DetailPageState = {
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

export const detailPageActions = detailPageSlice.actions;
export default detailPageSlice;
