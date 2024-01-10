// import { createAsyncThunk } from '@reduxjs/toolkit';
// import { updateAvatar, editUserInfo, updateWaterNorm } from '../Api';

// export const updateAvatarThunk = createAsyncThunk(
//   'user/avatar',
//   async (newPhoto, { rejectWithValue }) => {
//     try {
//       const avatarURL = await updateAvatar(newPhoto);
//       return avatarURL;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const editUserInfoThunk = createAsyncThunk(
//   'user/edit',
//   async (body, { rejectWithValue }) => {
//     try {
//       const data = await editUserInfo(body);
//       return data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const updateWaterNormThunk = createAsyncThunk(
//   'auth/waterRate',
//   async (newWaterRate, { rejectWithValue }) => {
//     try {
//       await updateWaterNorm(Number(newWaterRate));
//       return newWaterRate;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
