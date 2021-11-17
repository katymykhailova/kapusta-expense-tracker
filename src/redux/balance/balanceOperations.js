import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/authApi';

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const savedToken = state.auth.token;
    if (savedToken === null) return rejectWithValue();
    const data = await authApi.fetchCurrentUser(savedToken);
    return data;
  },
);

const updateUserBalance = createAsyncThunk(
  'auth/updateUserBalance',
  async balance => {
    const updatedBalance = await authApi.updateBalance(balance);
    return updatedBalance.data;
  },
);

export { getCurrentUser, updateUserBalance };
