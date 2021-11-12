import { createSlice } from '@reduxjs/toolkit';
import { getSummarryIncomesByYear, getSummarryExpensesByYear } from './index';

const initialState = {
  reportSummary: [],
import { getReportList } from './index';

const initialState = {
  items: null,
  error: null,
  isLoading: false,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [getSummarryIncomesByYear.pending]: (state, _) => {
    [getReportList.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },
    [getSummarryIncomesByYear.fulfilled]: (state, { payload }) => {
    [getReportList.fulfilled]: (state, { payload }) => {
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
    [getReportList.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default reportSlice.reducer;
