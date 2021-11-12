import { createSlice } from '@reduxjs/toolkit';

import {
  getTransactionsByMonts,
  addTransaction,
  removeTransaction,
  updateTransaction,
} from './index';

const initialState = {
  // transaction: {
  //   type: false,
  //   date: null,
  //   category: null,
  //   amount: null,
  //   description: null,
  //   owner: null,
  // },
  items: [],
  error: null,
  isLoading: false,
};

const transactionsSlice = createSlice({
  name: 'transactions',
  initialState,
  extraReducers: {
    [getTransactionsByMonts.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getTransactionsByMonts.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [getTransactionsByMonts.rejected]: (state, action) => {
      console.log(action);
      state.error = action.error.message;
      state.isLoading = false;
    },

    [addTransaction.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [addTransaction.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
      state.isLoading = false;
    },

    [addTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [removeTransaction.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [removeTransaction.fulfilled]: (state, { payload }) => {
      state.items = state.items.filter(el => el.id !== payload);
      state.isLoading = false;
    },

    [removeTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [updateTransaction.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [updateTransaction.fulfilled]: (state, { payload }) => {
      /** переписать */
      state.items = state.items.find(el => el.id === payload);
      state.isLoading = false;
    },

    [updateTransaction.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default transactionsSlice.reducer;
