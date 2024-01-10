import { createAsyncThunk } from '@reduxjs/toolkit';
import {
  addWater,
  editWater,
  deleteWater,
  getAllConsumedWaterMonth,
  getAllConsumedWaterToday,
} from '../Api';

export const addWaterThunk = createAsyncThunk(
  'water/addWater',
  async credentials => {
    try {
      const data = await addWater(credentials);
      return data;
    } catch (error) {
      return error;
    }
  }
);

export const editWaterThunk = createAsyncThunk(
  'water/editWater',
  async ({ _id, body }) => {
    try {
      const response = await editWater({ newWaterUser: body, id: _id });
      return response;
    } catch (error) {
      return error;
    }
  }
);

export const deleteWaterThunk = createAsyncThunk(
  'water/deleteWater',
  async (id, { rejectWithValue }) => {
    try {
      deleteWater(id);
      return id;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getTodayWaterThunk = createAsyncThunk(
  'water/getDayWater',
  async (_, { rejectWithValue }) => {
    try {
      const currentDate = new Date();
      const date = currentDate.getDate();
      const month = new Intl.DateTimeFormat('en-US', {
        month: 'long',
      }).format(currentDate);

      const data = await getAllConsumedWaterToday(date, month);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const getMonthWaterThunk = createAsyncThunk(
  'water/getMonthWater',
  async ({ date, month }, { rejectWithValue }) => {
    try {
      const { data } = await getAllConsumedWaterMonth(date, month);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
