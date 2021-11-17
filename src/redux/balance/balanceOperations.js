import { createAsyncThunk } from '@reduxjs/toolkit';
// import * as balanceApi from '../../services/balanceApi';
import * as authApi from '../../services/authApi';

// const getBalance = createAsyncThunk(
//   'balance/getBalance',
//   async () => {
//     const balance = await balanceApi.getBalance();
//     return balance.data.result;
//   },
// );

// const addBalance = createAsyncThunk(
//   'balance/addBalance',
//   async newBalance => {
//     const balance = await balanceApi.addBalance(newBalance);
//     return balance;
//   },
// );

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    //debugger;
    const state = getState();
    const savedToken = state.auth.token;
    if (savedToken === null) return rejectWithValue();
    const data = await authApi.fetchCurrentUser(savedToken);
    return data.balance;
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

// export { getBalance, addBalance };
