// import { createSlice } from '@reduxjs/toolkit';
// import {
//   fetchWater,
//   addWater,
//   deleteWater,
//   changeWater,
// } from './usersOperations';

// const handlePending = state => {
//   state.isLoading = true;
// };

// const handleRejected = (state, { payload }) => {
//   state.isLoading = false;
//   state.error = payload;
// };

// const waterSlice = createSlice({
//   name: 'water',
//   initialState: {
//     items: [],
//     error: null,
//     isLoading: false,
//   },

//   extraReducers: {
//     [fetchWater.pending]: handlePending,
//     [addWater.pending]: handlePending,
//     [deleteWater.pending]: handlePending,
//     [changeWater.pending]: handlePending,

//     [fetchWater.rejected]: handleRejected,
//     [addWater.rejected]: handleRejected,
//     [deleteWater.rejected]: handleRejected,
//     [changeWater.rejected]: handleRejected,

//     [fetchWater.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = payload;
//     },
//     [addWater.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items.push(payload);
//     },
//     [deleteWater.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       state.items = state.items.filter(water => water.id !== payload.id);
//     },
//     [changeWater.fulfilled](state, { payload }) {
//       state.isLoading = false;
//       state.error = null;
//       const index = state.items.findIndex(water => water.id === payload.id);
//       if (index !== -1) {
//         state.items = [
//           ...state.items.slice(0, index),
//           { ...state.items[index], ...payload },
//           ...state.items.slice(index + 1),
//         ];
//       }
//     },
//   },
// });

// export const waterReducer = waterSlice.reducer;
