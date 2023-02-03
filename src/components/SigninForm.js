import React from "react";
import DisplayMessage from "../components/DisplayMessage";
import ErrorMessage from "../components/ErrorMessage";
import { useStateContext, useDispatchContext } from "../context/context.js";
const SigninForm = () => {
  const [id, setId] = React.useState("");
  const [attendee, setAttendee] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [hasError, setHasError] = React.useState(false);
  const [hasConfError, setHasConfError] = React.useState(false);
  const [displayMsg, setDisplayMsg] = React.useState(false);

  const state = useStateContext();
  const dispatch = useDispatchContext();

  const handleID = (e) => {
    const { value } = e.target;
    setId(value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setAttendee((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const clearForm = () => {
    setDisplayMsg(false);
    setHasError(false);
    setHasConfError(false);
    setId("");
    setAttendee({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const targetConf = state.data.find((conf) => {
      return conf.id === +id;
    });

    let hasDuplicate;
    if (targetConf) {
      hasDuplicate = targetConf.attendees.some(
        (person) => person.email === attendee.email
      );
    }
    const validConf = state.data.some((conf) => conf.id === +id);

    if (!validConf) {
      setHasError(false);
      setHasConfError(true);
      setDisplayMsg(false);
    } else if (hasDuplicate) {
      clearForm();
      setHasError(true);

      dispatch({ type: "UPDATE_ATTENDEE", payload: { id: +id, attendee } });
    } else {
      dispatch({ type: "ADD_ATTENDEE", payload: { id: +id, attendee } });
      clearForm();
      setDisplayMsg(true);
    }
  };
  return (
    <form
      method="POST"
      onSubmit={handleSubmit}
      aria-labelledby="signin"
      className="form signin-form"
    >
      <div className="form-control">
        <label htmlFor="confID" className="required">
          Conference ID
        </label>
        <input
          id="confID"
          type="number"
          aria-required="true"
          placeholder="Enter conference ID"
          name="id"
          value={id}
          onChange={handleID}
          className="form-input"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="firstname" className="required">
          First Name
        </label>
        <input
          id="firstname"
          type="text"
          aria-required="true"
          placeholder="Enter first name"
          name="firstName"
          value={attendee.firstName}
          onChange={handleChange}
          className="form-input"
          required
        />
      </div>
      <div className="form-control">
        <label htmlFor="lastname" className="required">
          Last Name
        </label>
        <input
          type="text"
          id="lastname"
          value={attendee.lastName}
          name="lastName"
          onChange={handleChange}
          aria-required="true"
          className="form-input"
          required
          placeholder="Enter last name"
        />
      </div>
      <div className="form-control">
        <label htmlFor="email" className="required">
          Email
        </label>
        <input
          type="email"
          id="email"
          value={attendee.email}
          name="email"
          onChange={handleChange}
          aria-required="true"
          className="form-input"
          required
          placeholder="Enter email address"
        />
      </div>
      <div className="btn-wrapper">
        <button className="btn btn-cancel" onClick={clearForm}>
          Cancel
        </button>
        <button className="btn btn-primary login-btn">Add</button>
      </div>
      {hasConfError && <ErrorMessage msg="Not a valid conference ID." />}
      {hasError && <DisplayMessage msg="Member has been checked in." />}
      {displayMsg && (
        <DisplayMessage msg="New attendee has been added and checked in." />
      )}
    </form>
  );
};

export default SigninForm;
