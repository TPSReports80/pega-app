import React from "react";
import SigninForm from "../components/SigninForm";
import { RiUserAddFill } from "react-icons/ri";

const Signin = () => {
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
        <SigninForm />
      </section>
    </div>
  );
};

export default Signin;
