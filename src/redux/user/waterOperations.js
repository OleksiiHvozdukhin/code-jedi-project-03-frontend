import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:8000/';

// Пока неизвестны конкретные маршруты - я называю их просто "water"

export const fetchWater = createAsyncThunk(
  'water/fetchAll',
  async (_, { rejectWithValue }) => {
    try {
      const { data } = await axios.get('/water');
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addWater = createAsyncThunk(
  'water/addWater',
  async ({ volume, time }, { rejectWithValue }) => {
    try {
      const { data } = await axios.post('/water', { volume, time });
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteWater = createAsyncThunk(
  'water/deleteWater',
  async (waterId, { rejectWithValue }) => {
    try {
      const { data } = await axios.delete(`/water/${waterId}`);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const changeWater = createAsyncThunk(
  'water/changeWater',
  async ({ waterId, updatedData }, { rejectWithValue }) => {
    try {
      const { data } = await axios.patch(`/water/${waterId}`, updatedData);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
