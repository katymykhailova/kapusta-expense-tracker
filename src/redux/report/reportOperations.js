import { createAsyncThunk } from '@reduxjs/toolkit';
import * as reportApi from '../../services/reportApi';

export const getReportList = createAsyncThunk(
  'report/getReportList',
  async (reportType, year) => {
    const reportList = await reportApi.getReportList(reportType, year);
    return reportList.data;
  },
);
