export const selectWaterToday = state => state.waterData.today;
export const selectMonthData = state => state.waterData.month;

export const selectDailyNormFulfillment = state =>
  state.waterData.today.dailyNormFulfillment;

export const selectWaterRate = state => state.auth.user.waterRate;

export const selectWaterVolumePercentage = state =>
  state.auth.user.volumePercentage;
