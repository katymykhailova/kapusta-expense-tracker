export {
  signUp,
  logIn,
  logOut,
  getCurrentUser,
} from 'redux/auth/authOperations';

export {
  getUserIsLoggedIn,
  getUserName,
  getIsFetchCurrentUser,
  getAuthError,
  getIsLoading,
} from 'redux/auth/authSelectors';
