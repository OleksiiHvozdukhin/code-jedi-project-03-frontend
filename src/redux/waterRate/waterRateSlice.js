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
});

export const { saveWaterRate } = waterRateSlice.actions;
export const waterRateReducer = waterRateSlice.reducer;
