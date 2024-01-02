import { saveWaterRateAsync } from './waterRateOperations';

const { createSlice } = require('@reduxjs/toolkit');

const waterRateSlice = createSlice({
  name: 'waterRate',
  initialState: {
    dailyNorma: 2,
    isLoading: false,
    error: null,
  },
  reducers: {
    saveWaterRate: (state, { payload }) => {
      state.dailyNorma = payload;
    },
  },

  extraReducers: builder => {
    builder
      .addCase(saveWaterRateAsync.pending, state => {
        state.isLoading = true;
      })
      .addCase(saveWaterRateAsync.fulfilled, (state, { payload }) => {
        state.dailyNorma = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(saveWaterRateAsync.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
      });
  },
});

export const { saveWaterRate } = waterRateSlice.actions;
export const waterRateReducer = waterRateSlice.reducer;
