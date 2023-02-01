import React from "react";
import { BiError } from "react-icons/bi";
const ErrorMessage = (props) => {
  return (
    <section className="error">
      <BiError />
      <p>{props.msg}</p>
    </section>
  );
};

export default ErrorMessage;
