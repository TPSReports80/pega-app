import React from "react";
import { RiCheckFill } from "react-icons/ri";
const Attendee = (props) => {
  return (
    <tr>
      <td>{props.lastName}</td>
      <td>{props.firstName}</td>
      <td>
        <a href={`mailto: ${props.email}`}>{props.email}</a>
      </td>
      <td>{props.checkedIn ? <RiCheckFill /> : ""}</td>
    </tr>
  );
};

export default Attendee;
