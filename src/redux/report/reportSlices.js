import { createSlice } from '@reduxjs/toolkit';

import { getReportList } from './index';

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const reportSlice = createSlice({
  name: 'report',
  initialState,
  extraReducers: {
    [getReportList.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getReportList.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [getReportList.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default reportSlice.reducer;
