// export const selectWaterRate = state => state.waterRate.dailyNorma;
export const selectWaterRate = state => state.auth.user.waterRate;

export const selectError = state => state.waterRate.error;
export const selectIsLoading = state => state.waterRate.isLoading;
