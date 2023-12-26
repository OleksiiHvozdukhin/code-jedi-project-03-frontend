import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000';

export const saveWaterRateAsync = createAsyncThunk(
  'waterRate/saveWaterRate',
  async (dailyNorma, thunkAPI) => {
    try {
      const { data } = await axios.patch('/user/waterNorm', { dailyNorma });
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
