import { createSlice } from '@reduxjs/toolkit';
import {
  registerThunk,
  loginThunk,
  logoutThunk,
  refreshUserThunk,
  updateAvatarThunk,
  editUserInfoThunk,
  updateWaterNormThunk,
} from './authOperations';

import {
  handleLogin,
  handleRegister,
  handleLogout,
  handleRefreshFulfield,
  handleRefreshPending,
  handleRefreshReject,
  handlerUpdateAvatar,
  handlerEditUserInfo,
  handlerSaveWaterRate,
} from './handlers';

export const initialState = {
  user: {
    name: '',
    email: '',
    waterNorma: '',
    gender: '',
    avatarURL: '',
  },
  token: null,
  isLoggedIn: false,
  // isLoggedIn: true,
  isRefreshing: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: builder => {
    builder
      .addCase(registerThunk.fulfilled, handleRegister)
      .addCase(loginThunk.fulfilled, handleLogin)
      .addCase(logoutThunk.fulfilled, handleLogout)
      .addCase(refreshUserThunk.fulfilled, handleRefreshFulfield)
      .addCase(refreshUserThunk.pending, handleRefreshPending)
      .addCase(refreshUserThunk.rejected, handleRefreshReject)
      .addCase(updateAvatarThunk.fulfilled, handlerUpdateAvatar)
      .addCase(editUserInfoThunk.fulfilled, handlerEditUserInfo)
      .addCase(updateWaterNormThunk.fulfilled, handlerSaveWaterRate);
  },
});

export const authReducer = authSlice.reducer;
