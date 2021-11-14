import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from '../../services/authApi';
import toast from 'react-hot-toast';

const signUp = createAsyncThunk(
  'auth/register',
  async (credentials, { rejectWithValue }) => {
    try {
      const { username, email, avatar, balance, token } =
        await authApi.signUpUser(credentials);
      toast.success('Регистрация прошла успешно');

      return { username, email, avatar, balance, token };
    } catch (error) {
      toast.error('Пользователь с такой почтой уже существует');
      return rejectWithValue(error);
    }
  },
);

const logIn = createAsyncThunk(
  'auth/logIn',
  async (credentials, { rejectWithValue }) => {
    try {
      const { username, email, avatar, balance, token } =
        await authApi.logInUser(credentials);
      toast.success(`С возвращением, ${username}`);
      return { username, email, avatar, balance, token };
    } catch (error) {
      toast.error('Ошибка авторизации. Проверте почту и пароль.');
      return rejectWithValue(error);
    }
  },
);

const logOut = createAsyncThunk('auth/logOut', async () => {
  await authApi.logOutUser();
});

const getCurrentUser = createAsyncThunk(
  'auth/getCurrentUser',
  async (_, { getState, rejectWithValue }) => {
    const state = getState();
    const savedToken = state.auth.token;
    if (savedToken === null) return rejectWithValue();
    const data = await authApi.fetchCurrentUser(savedToken);
    return data;
  },
);

const updateUserBalance = createAsyncThunk(
  'auth/updateUserBalance',
  async balance => {
    const updatedBalance = await authApi.updateBalance(balance);
    return updatedBalance.data;
  },
);

export { signUp, logIn, logOut, getCurrentUser, updateUserBalance };
