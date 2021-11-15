import { createAsyncThunk } from '@reduxjs/toolkit';
import * as transactionsApi from '../../services/transactionsApi';

const getTransactionsByMonts = createAsyncThunk(
  'transactions/getTransactionsByMonth',
  async date => {
    const transactions = await transactionsApi.getTransactionsByMonts(date);
    // console.log(transactions.data);
    return transactions.data;
  },
);

const addTransaction = createAsyncThunk(
  'transactions/addTransaction',
  async newTransaction => {
    const transaction = await transactionsApi.addTransaction(newTransaction);
    return transaction.data.result;
  },
);

const removeTransaction = createAsyncThunk(
  'transactions/removeTransaction',
  async transactionId => {
    await transactionsApi.removeTransaction(transactionId);
    return transactionId;
  },
);

const updateTransaction = createAsyncThunk(
  'transactions/updateTransaction',
  async transactionId => {
    await transactionsApi.updateTransaction(transactionId);
    return transactionId;
  },
);

export {
  getTransactionsByMonts,
  addTransaction,
  removeTransaction,
  updateTransaction,
};
