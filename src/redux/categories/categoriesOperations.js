import { createAsyncThunk } from '@reduxjs/toolkit';
import * as categoriesApi from '../../services/categoriesApi';

const getCategoriesList = createAsyncThunk(
  'categories/getCategoriesList',
  async () => {
    const categories = await categoriesApi.getCategoriesList();
    return categories.data.result;
  },
);

const addCategory = createAsyncThunk(
  'categories/addCategory',
  async newCategory => {
    const category = await categoriesApi.addCategory(newCategory);
    return category;
  },
);

export { getCategoriesList, addCategory };
