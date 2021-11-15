export const getUserName = state => state.auth.user.username;
export const getUserAvatar = state => state.auth.user.avatar;
export const getUserIsLoggedIn = state => state.auth.isLoggedIn;
export const getIsFetchCurrentUser = state => state.auth.isFetchCurrentUser;
export const getAuthError = state => state.auth.error;
export const getIsLoading = state => state.auth.isLoading;
export const getUserBalance = state => state.auth.user.balance;
