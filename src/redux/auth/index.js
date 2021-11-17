export { getGoogleAuthToken } from './authActions';

// export {
//   signUp,
//   logIn,
//   logOut,
//   getCurrentUser,
//   updateUserBalance,
// } from './authOperations';
export { signUp, logIn, logOut } from './authOperations';

export {
  getUserIsLoggedIn,
  getUserName,
  getUserAvatar,
  getIsFetchCurrentUser,
  getAuthError,
  getIsLoading, // getUserBalance,
} from './authSelectors';
