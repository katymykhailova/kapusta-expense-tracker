import { createSlice } from '@reduxjs/toolkit';
import { updateUserBalance, getUserBalance } from './index';

const initialState = {
  balance: null,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'userBalance',
  initialState,
  extraReducers: {
    [updateUserBalance.pending]: (state, _) => {
      state.isLoading = true;
    },

    [updateUserBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload.balance;
      state.isLoading = false;
    },

    [updateUserBalance.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
    [getUserBalance.pending]: (state, _) => {
      state.isLoading = true;
    },

    [getUserBalance.fulfilled]: (state, { payload }) => {
      state.balance = payload.balance;
      state.isLoading = false;
    },

    [getUserBalance.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;
