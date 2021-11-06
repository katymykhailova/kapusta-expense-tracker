import { createAsyncThunk } from '@reduxjs/toolkit';
import * as authApi from 'services/authApi';

const signUp = createAsyncThunk('auth/register', async credentials => {
  const data = await authApi.signUpUser(credentials);
  return data;
});

const logIn = createAsyncThunk('auth/logIn', async credentials => {
  const data = await authApi.logInUser(credentials);
  return data;
});

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

export { signUp, logIn, logOut, getCurrentUser };
