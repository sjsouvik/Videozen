export const signUpState = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  showPassword: false,
  formErrors: {},
};

export const signUpReducer = (state, { type, payload }) => {
  switch (type) {
    case "INITIALIZE_DATA":
      return { ...state, [payload.name]: payload.data };

    case "SHOW_HIDE_PASSWORD":
      return { ...state, showPassword: !state.showPassword };

    case "UPDATE_FORM_ERRORS":
      return { ...state, formErrors: payload };
    default:
      break;
  }
};
