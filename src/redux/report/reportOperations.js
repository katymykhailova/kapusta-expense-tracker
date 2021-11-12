import { createAsyncThunk } from '@reduxjs/toolkit';
import * as reportApi from '../../services/reportApi';

const getSummarryIncomesByYear = createAsyncThunk(
  'report/getSummaryIncomesByYear',
  async year => {
    const reportSummary = await reportApi.getSummaryIncomesByYear(year);
    return reportSummary;
  },
);

const getSummarryExpensesByYear = createAsyncThunk(
  'report/getSummaryExpensesByYear',
  async year => {
    const reportSummary = await reportApi.getSummaryExpensesByYear(year);
    return reportSummary;
  },
);

export { getSummarryIncomesByYear, getSummarryExpensesByYear };
