import { createSlice } from '@reduxjs/toolkit';
import { signUp, logIn, logOut, getGoogleAuthToken } from './index';

const initialState = {
  user: {
    _id: null,
    username: null,
    email: null,
    avatar: null,
    balance: null,
    token: null,
  },
  token: null,
  error: null,
  isLoggedIn: false,
  isFetchCurrentUser: false,
  isLoading: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  extraReducers: {
    [signUp.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [signUp.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [signUp.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [logIn.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [logIn.fulfilled]: (state, { payload }) => {
      state.user = payload;
      state.token = payload.token;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [logIn.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },

    [getGoogleAuthToken]: (state, { payload }) => {
      state.token = payload;
      state.isLoggedIn = true;
      state.isLoading = false;
    },

    [logOut.pending]: (state, _) => {
      state.error = null;
      state.isLoading = true;
    },

    [logOut.fulfilled]: (state, _) => {
      state.user = {
        _id: null,
        username: null,
        email: null,
        avatar: null,
        balance: null,
        token: null,
      };
      state.token = null;
      state.isLoggedIn = false;
      state.isLoading = false;
    },

    [logOut.rejected]: (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    },
  },
});

export default authSlice.reducer;
