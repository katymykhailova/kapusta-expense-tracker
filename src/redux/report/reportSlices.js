import { createSlice } from '@reduxjs/toolkit';

import { getSummarryIncomesByYear, getSummarryExpensesByYear } from './index';

const initialState = {
  reportSummary: [],
  error: null,
  isLoading: false,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [getSummarryIncomesByYear.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getSummarryIncomesByYear.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [getSummarryIncomesByYear.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
    [getSummarryExpensesByYear.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getSummarryExpensesByYear.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [getSummarryExpensesByYear.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default reportSlice.reducer;
