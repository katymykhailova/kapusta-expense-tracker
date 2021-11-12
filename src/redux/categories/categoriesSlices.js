import { createSlice } from '@reduxjs/toolkit';
import { getCategoriesList, addCategory } from './index';

const initialState = {
  items: [],
  error: null,
  isLoading: false,
};

const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  extraReducers: {
    [getCategoriesList.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [getCategoriesList.fulfilled]: (state, { payload }) => {
      state.items = payload;
      state.isLoading = false;
    },

    [getCategoriesList.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },

    [addCategory.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [addCategory.fulfilled]: (state, { payload }) => {
      state.items = [payload, ...state.items];
      state.isLoading = false;
    },

    [addCategory.rejected]: (state, action) => {
      state.error = action.error.message;
      state.isLoading = false;
    },
  },
});

export default categoriesSlice.reducer;
