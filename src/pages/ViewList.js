import React from "react";
import { RiFileDownloadFill } from "react-icons/ri";
import data from "../data/list.js";
import Attendee from "../components/Attendee.js";

import ErrorMessage from "../components/ErrorMessage.js";
const ViewList = () => {
  const [list, setList] = React.useState(data);
  const [hasError, setHasError] = React.useState(false);

  const attendeeElements = list.map((el, i) => {
    return <Attendee key={i + 1} {...el} />;
  });

  React.useEffect(() => {
    // NOTE: Normally would be hooked up to the an API call to
    // fetch list from database.
    // let url;
    // fetch(url)
    //   .then((res) => {
    //     if (!res.ok) throw new Error("Unable to fetch list.");
    //     res.json();
    //   })
    //   .then((data) => console.log(data))
    //   .catch((err) => {
    //     console.error(err);
    //     setHasError((prevState) => !prevState);
    //   });
  }, []);
  return (
    <div className="page-container">
      <div className="page-header">
        <div className="icon-bg">
          <RiFileDownloadFill />
        </div>
        <h2>View List</h2>
      </div>
      <section>
        <h3>List of current attendees</h3>
        <table id="attendee-table">
          <thead>
            <tr>
              <th>Last Name</th>
              <th>First Name</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody> {attendeeElements}</tbody>
        </table>
      </section>
      {hasError && <ErrorMessage />}
    </div>
  );
};

export default ViewList;
