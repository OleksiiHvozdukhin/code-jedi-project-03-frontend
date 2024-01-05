import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { updateWaterNorm } from 'redux/Api';

axios.defaults.baseURL = 'http://localhost:8000';

export const saveWaterRateAsync = createAsyncThunk(
  'waterRate/saveWaterRate',
  async (dailyNorma, thunkAPI) => {
    try {
      updateWaterNorm(dailyNorma);
      // const { data } = await axios.patch('/users/water-rate', { dailyNorma });
      // return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
