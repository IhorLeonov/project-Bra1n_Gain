export const selectIsLoggedIn = state => state.auth.isLoggedIn;

export const selectUser = state => state.auth.user;

export const selectIsRefreshing = state => state.auth.isRefreshing;

export const selectToken = state => state.auth.token;

export const selectTheme = state => state.auth.theme;

export const selectSideBarToggle = state => state.auth.sideBarShown;
