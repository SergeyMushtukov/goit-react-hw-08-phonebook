const selectIsLoggedIn = state => state.auth.isLoggedIn;

const selectUsername = state => state.auth.user.name;

const selectUserEmail = state => state.auth.user.email;

const selectIsFetchingCurrentUser = state => state.auth.isFetchingCurrentUser;

const authSelectors = {
  selectIsLoggedIn,
  selectUsername,
  selectUserEmail,
  selectIsFetchingCurrentUser,
};
export default authSelectors;
