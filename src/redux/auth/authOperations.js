import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  signin,
  signup,
  logout,
  refreshUser,
  updateAvatar,
  editUserInfo,
  updateWaterNorm,
} from '../Api';
import toast from 'react-hot-toast';

export const registerThunk = createAsyncThunk(
  'auth/register',
  async credentials => {
    try {
      const data = await signup(credentials);
      toast.success('Registered successfully');
      return data;
    } catch (error) {
      toast.error('Something went wrong');
      return error.response.data.message;
    }
  }
);

export const loginThunk = createAsyncThunk('auth/login', async credentials => {
  try {
    const data = await signin(credentials);
    toast.success('Loged in successfully');
    return data;
  } catch (error) {
    toast.error('Something went wrong');
    return error;
    
  }
});

export const logoutThunk = createAsyncThunk(
  'auth/logout',
  async (_, { rejectWithValue }) => {
    try {
      await logout();
      toast.success('Loged out successfully');
      return;
    } catch (error) {
      toast.error('Something went wrong');
      return rejectWithValue(error.message);
    }
  }
);

export const refreshUserThunk = createAsyncThunk(
  'auth/refresh',
  async (_, { rejectWithValue, getState }) => {
    try {
      const {
        auth: { token },
      } = getState();
      const data = await refreshUser(token);

      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  },
  {
    condition: (_, { getState }) => {
      const {
        auth: { token },
      } = getState();
      if (!token) {
        return false;
      }
    },
  }
);

export const updateAvatarThunk = createAsyncThunk(
  'user/avatar',
  async (newPhoto, { rejectWithValue }) => {
    try {
      const avatarURL = await updateAvatar(newPhoto);
      toast.success('Your avatar updated successfully');
      return avatarURL;
    } catch (error) {
      toast.error('Something went wrong');
      return rejectWithValue(error.message);
    }
  }
);

export const editUserInfoThunk = createAsyncThunk(
  'user/edit',
  async (body, { rejectWithValue }) => {
    try {
      const data = await editUserInfo(body);
      toast.success('Your info updated successfully');
      return data;
    } catch (error) {
      toast.error('Something went wrong');
      return rejectWithValue(error.message);
    }
  }
);

export const updateWaterNormThunk = createAsyncThunk(
  'auth/waterRate',
  async (dailyNorma, thunkAPI) => {
    try {
      const { waterRate } = await updateWaterNorm(dailyNorma * 1000);
      toast.success('Water norm updated successfully');
      return waterRate;
    } catch (error) {
      toast.error('Something went wrong');
      return thunkAPI.rejectWithValue(error);
    }
  }
);
