import React from "react";
import LoginForm from "../components/LoginForm";
import { RiUserAddFill } from "react-icons/ri";
import ErrorMessage from "../components/ErrorMessage";
const Signin = () => {
  const [attendee, setAttendee] = React.useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [hasError, setHasError] = React.useState(false);
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
    setAttendee({
      firstName: "",
      lastName: "",
      email: "",
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // NOTE: Normally would make a POST fetch call to add attendee
    //to general list in database
    let url;
    fetch(`${url}/list`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(attendee),
    })
      .then((res) => {
        if (!res.ok) throw new Error("Unable to add attendee.");
      })
      .then((data) => console.log(data))
      .catch((err) => {
        setHasError((prevState) => !prevState);
        console.error(err);
      });
  };
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="icon-bg">
          <RiUserAddFill />
        </div>
        <h2>Sign in</h2>
      </div>
      <section>
        <h3 id="signin">Attendee Sign-in Form </h3>
        <form
          onSubmit={handleSubmit}
          aria-labelledby="signin"
          className="form signin-form"
        >
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
        </form>
      </section>
      {hasError && <ErrorMessage msg="Unable to add attendee." />}
    </div>
  );
};

export default Signin;
