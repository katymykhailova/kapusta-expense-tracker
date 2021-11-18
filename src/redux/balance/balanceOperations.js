import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/authApi';

const getUserBalance = createAsyncThunk('auth/getUserBalance', async () => {
  const balance = await authApi.getUserBalance();
  return balance.data.result;
});

const updateUserBalance = createAsyncThunk(
  'auth/updateUserBalance',
  async balance => {
    const updatedBalance = await authApi.updateBalance(balance);
    return updatedBalance.data;
  },
);

export { updateUserBalance, getUserBalance };
