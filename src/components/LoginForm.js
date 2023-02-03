import React, { useState } from "react";
import { useStateContext, useDispatchContext } from "../context/context.js";
import logo from "../images/pega-logo.svg";

/******************************
 * Hardcoded Data for scenario *
 *******************************/

// Let's pretend this is a database and that
// these passwords are appropriately encrypted
// in a real application

const sampleAdmin = [
  {
    name: "admin",
    password: 1111,
  },
];

const LoginForm = () => {
  const [user, setUser] = useState({
    name: "",
    password: "",
  });

  const dispatch = useDispatchContext();
  const state = useStateContext();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // NOTE: Normally would be hooked up to the an API call to determine
    // if user exists, but hardcoding data for scenario
    if (
      user.name === sampleAdmin[0].name &&
      +user.password === sampleAdmin[0].password
    ) {
      dispatch({ type: "LOG_IN" });
    } else return;
  };
  return (
    <div className="form-container ">
      <div className="form-wrapper login-form-wrapper">
        <div aria-label="logo" className="logo-container">
          <img src={logo} alt="pega logo" />
          <span>World</span>
        </div>
        <h1 className="login-title">Attendee Management Application</h1>
        <form
          onSubmit={handleSubmit}
          aria-labelledby="signin"
          className="login-form form"
        >
          <h3 id="signin">Sign In</h3>
          <div className="form-control">
            <label htmlFor="username" className="required">
              Username
            </label>
            <input
              id="username"
              type="text"
              aria-required="true"
              placeholder="Enter username"
              name="name"
              value={user.name}
              onChange={handleChange}
              className="form-input"
              required
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="required">
              Password
            </label>
            <input
              type="text"
              id="password"
              value={user.password}
              name="password"
              onChange={handleChange}
              aria-required="true"
              className="form-input"
              required
              placeholder="Enter password"
            />
          </div>

          <button className="btn btn-primary login-btn">Login</button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
