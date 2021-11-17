import { createSlice } from '@reduxjs/toolkit';
import { getCurrentUser, updateUserBalance } from './index';

const initialState = {
  balance: null,
  isFetchCurrentUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'userBalance',
  initialState,
  extraReducers: {
    [getCurrentUser.pending]: (state, _) => {
      state.isFetchCurrentUser = true;
      state.isLoading = true;
    },

    [getCurrentUser.fulfilled]: (state, { payload }) => {
      state.balance = payload.balance;
      state.isLoggedIn = true;
      state.isFetchCurrentUser = false;
      state.isLoading = false;
    },

    [getCurrentUser.rejected]: (state, _) => {
      state.isFetchCurrentUser = false;
      state.isLoading = false;
    },

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
  },
});

export default authSlice.reducer;
