// import { initialState } from './authSlice';
import { initialState } from './authSlice';

export const handleLogin = (state, { payload }) => {
  if (payload.user && payload.token) {
    state.user = payload.user;
    state.token = payload.token;
    state.isLoggedIn = true;
  }
};

export const handleRegister = (state, { payload }) => {
  // state.token = payload.token;
  // state.user = payload.user;
  // state.isLoggedIn = true;
};

export const handleLogout = state => {
  state = initialState;
  // state.isLoggedIn = false;
  const stateCopy = { ...state, isLoggedIn: false };
  return stateCopy;
};

export const handleRefreshFulfield = (state, { payload }) => {
  state.user = payload;
  state.isRefreshing = false;
  state.isLoggedIn = true;
};

export const handleRefreshPending = state => {
  state.isRefreshing = true;
};

export const handleRefreshReject = state => {
  state.isRefreshing = false;
};

export const handlerUpdateAvatar = (state, { payload }) => {
  state.user.avatarURL = payload;
};

export const handlerEditUserInfo = (state, { payload }) => {
  state.user = payload.data;
};

export const handlerSaveWaterRate = (state, { payload }) => {
  state.user.waterRate = payload;
};
