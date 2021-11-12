import axios from 'axios';

// axios.defaults.baseURL = `http://localhost:3000/api`;

/**
 * 1. getSummarryIncomesByYear
 * 2. getSummarryExpensesByYear
 * 3. getReportIncomesByMonts
 * 4. getReportExpensesByMonts
 */

export async function getSummaryIncomesByYear(year) {
  const { data } = await axios.get(`/report?i=${year}`);
  return data;
}

export async function getSummaryExpensesByYear(year) {
  const { data } = await axios.get(`/report?o=${year}`);
  return data;
}
// export async function getReportIncomesByMonts({month,year}) {
//   const { data } = await axios.get(`/report?`);
//   return data;
// }

// export async function getReportExpensesByMonts(month,year) {
//   const { data } = await axios.get(`/report?`);
//   return data;
// }
