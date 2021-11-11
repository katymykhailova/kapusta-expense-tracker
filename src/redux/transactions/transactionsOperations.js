import { createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionsApi from '../../services/transactionsApi';

const getTransactionsByMonts = createAsyncThunk(
  'transactions/getTransactionsByMonth',
  async date => {
    const transactions = await transactionsApi.getTransactionsByMonts(date);
    return transactions;
    // return { type, date, category, amount, description, owner}
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async newTransaction => {
    const transaction = await transactionsApi.addTransaction(newTransaction);
    return transaction;
  },
);

const removeTransaction = createAsyncThunk(
  'transactions/removeTransaction',
  async transactionId => {
    const data = await transactionsApi.removeTransaction(transactionId);
    return data;
  },
);

const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async transactionId => {
    const data = await transactionsApi.updateTransaction(transactionId);
    return data;
  },
);

export {
  getTransactionsByMonts,
  addTransaction,
  removeTransaction,
  updateTransaction,
};
