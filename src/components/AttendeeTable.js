import React from "react";
import { useStateContext } from "../context/context";
import Attendee from "../components/Attendee.js";
const AttendeeTable = () => {
  const state = useStateContext();

  function compare(a, b) {
    // Use toUpperCase() to ignore character casing
    const lastA = a.lastName.toUpperCase();
    const lastB = b.lastName.toUpperCase();

    let comparison = 0;
    if (lastA > lastB) {
      comparison = 1;
    } else if (lastA < lastB) {
      comparison = -1;
    }
    return comparison;
  }
  const sortedList = state.viewList.sort(compare);
  const attendeeElements = sortedList.map((el, i) => {
    return <Attendee key={i + 1} {...el} />;
  });
  const emailList = state.viewList.map((person) => person.email).join(",");
  console.log(emailList);
  return (
    <>
      <table id="attendee-table">
        <thead>
          <tr>
            <th>Last Name</th>
            <th>First Name</th>
            <th>Email</th>
            <th>Checked In</th>
          </tr>
        </thead>
        <tbody>{attendeeElements}</tbody>
      </table>
      <div className="btn-wrapper email-btn-wrapper">
        <a href={`mailto: ${emailList}`} className="btn btn-primary email">
          Email all
        </a>
      </div>
    </>
  );
};

export default AttendeeTable;
