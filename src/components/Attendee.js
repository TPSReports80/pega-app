import React from "react";

const Attendee = (props) => {
  console.log(props);
  return (
    <tr>
      <td>{props.lastName}</td>
      <td>{props.firstName}</td>
      <td>
        <a href={`mailto: ${props.email}`}>{props.email}</a>
      </td>
    </tr>
  );
};

export default Attendee;
