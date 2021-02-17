export const getIsLoggedIn = (state) => {
  return state.login_state.isLoggedIn;
}

export const getValidEmail = (state) => {
  return state.login_state.validEmail;
}

export const getEmail = (state) => {
  return state.login_state.email;
}

export const getPassword = (state) => {
  return state.login_state.password;
}

export const getPasswordToggle = (state) => {
  return state.login_state.passwordToggle;
}
