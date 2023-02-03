import React from "react";
import { RiCheckFill } from "react-icons/ri";
const DisplayMessage = (props) => {
  return (
    <section className="success msg-container">
      <RiCheckFill />
      <p>{props.msg}</p>
    </section>
  );
};

export default DisplayMessage;
