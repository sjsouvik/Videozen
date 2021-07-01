import { useReducer } from "react";
import { Link } from "react-router-dom";
import { signup } from "../../server/serverUpdate";

import "../Login/Login.css";

import { useAuth } from "../../context/auth-context";

import { signUpState, signUpReducer } from "../../reducer/signUpReducer";

const Signup = () => {
  const [state, dispatch] = useReducer(signUpReducer, signUpState);

  const { login } = useAuth();

  const handleFormValidation = () => {
    let isFormValid = true;
    let formErrors = {};

    if (firstName.trim().length < 3) {
      isFormValid = false;
      formErrors["firstNameError"] = "First name must contain min. 3 letters";
    }
    if (lastName.trim().length === 0) {
      isFormValid = false;
      formErrors["lastNameError"] = "Last name must contain min. 1 character";
    }
    if (password.length < 5 || !/\d/.test(password)) {
      isFormValid = false;
      formErrors["passwordError"] =
        "Password must contain min. 5 letters and 1 number";
    }

    dispatch({ type: "UPDATE_FORM_ERRORS", payload: formErrors });

    return isFormValid;
  };

  const signupHandler = async (e) => {
    e.preventDefault();

    if (handleFormValidation()) {
      const response = await signup(firstName, lastName, email, password);

      if (response.error) {
        return dispatch({
          type: "UPDATE_FORM_ERRORS",
          payload: { emailError: response.message },
        });
      }

      login(email, password);
    }
  };

  const { firstName, lastName, email, password, showPassword, formErrors } =
    state;

  const { firstNameError, lastNameError, emailError, passwordError } =
    formErrors;

  return (
    <form className="form" onSubmit={signupHandler}>
      <h3>Create your account</h3>
      <input
        type="text"
        className="form-control"
        placeholder="First Name"
        value={firstName}
        onChange={(e) =>
          dispatch({
            type: "INITIALIZE_DATA",
            payload: { name: "firstName", data: e.target.value },
          })
        }
        required
      />
      {firstNameError !== undefined && (
        <p className="input-error">{firstNameError}</p>
      )}

      <input
        type="text"
        className="form-control"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) =>
          dispatch({
            type: "INITIALIZE_DATA",
            payload: { name: "lastName", data: e.target.value },
          })
        }
        required
      />
      {lastNameError !== undefined && (
        <p className="input-error">{lastNameError}</p>
      )}

      <input
        type="email"
        className="form-control"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          dispatch({
            type: "INITIALIZE_DATA",
            payload: { name: "email", data: e.target.value },
          })
        }
        required
      />
      {emailError !== undefined && <p className="input-error">{emailError}</p>}

      <div className="password">
        <input
          type={showPassword ? "text" : "password"}
          className="form-control password-input"
          placeholder="Password"
          value={password}
          onChange={(e) =>
            dispatch({
              type: "INITIALIZE_DATA",
              payload: { name: "password", data: e.target.value },
            })
          }
          required
        />

        {password && (
          <div
            className="show-password"
            onClick={() => dispatch({ type: "SHOW_HIDE_PASSWORD" })}
          >
            {showPassword ? "HIDE" : "SHOW"}
          </div>
        )}
      </div>
      {passwordError !== undefined && (
        <p className="input-error">{passwordError}</p>
      )}

      <button className="btn btn-primary form-button">SIGNUP</button>
      <p>
        Already have an account?{" "}
        <Link to="/login" className="link">
          Login
        </Link>
      </p>
    </form>
  );
};

export default Signup;
