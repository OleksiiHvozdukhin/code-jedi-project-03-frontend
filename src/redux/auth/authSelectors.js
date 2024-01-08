export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectUserToken = state => state.auth.token;

export const selectWaterRate = state => state.auth.user.waterRate;
