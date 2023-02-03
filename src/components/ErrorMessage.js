import React from "react";
import { BiError } from "react-icons/bi";
const ErrorMessage = (props) => {
  return (
    <section className="error msg-container">
      <BiError />
      <p>{props.msg}</p>
    </section>
  );
};

export default ErrorMessage;
