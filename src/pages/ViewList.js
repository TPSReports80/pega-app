import React from "react";
import { RiFileDownloadFill } from "react-icons/ri";
import AttendeeTable from "../components/AttendeeTable.js";
import ConfIDForm from "../components/ConfIDForm.js";

import { useStateContext } from "../context/context.js";

const ViewList = () => {
  const state = useStateContext();
  console.log(state.data);
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
        <ConfIDForm />
        {state.showTable && (
          <>
            <AttendeeTable />
          </>
        )}
      </section>
    </div>
  );
};

export default ViewList;
