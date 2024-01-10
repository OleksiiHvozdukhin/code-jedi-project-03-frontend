import { createSlice } from '@reduxjs/toolkit';
import {
  handleEditWater,
  handleGetMonthWater,
  handleGetTodayWater,
  handlerAddWater,
  handlerDeleteWater,
} from './handlers';
import {
  addWaterThunk,
  editWaterThunk,
  deleteWaterThunk,
  getMonthWaterThunk,
  getTodayWaterThunk,
} from './consumedwatersOperations';

const initialState = {
  month: [],
  today: {
    dailyWaterList: [],
    // dailyNormFulfillment: 0,
    // waterVolumePercentage: 0,
  },
};

const waterSlice = createSlice({
  name: 'water',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(addWaterThunk.fulfilled, handlerAddWater)
      .addCase(editWaterThunk.fulfilled, handleEditWater)
      .addCase(deleteWaterThunk.fulfilled, handlerDeleteWater)
      .addCase(getMonthWaterThunk.fulfilled, handleGetMonthWater)
      .addCase(getTodayWaterThunk.fulfilled, handleGetTodayWater);
  },
});

export const waterReducer = waterSlice.reducer;
