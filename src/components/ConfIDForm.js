import React from "react";
import { useStateContext, useDispatchContext } from "../context/context.js";
import ErrorMessage from "./ErrorMessage.js";
const ConfIDForm = () => {
  const [id, setId] = React.useState("");
  const [hasError, setHasError] = React.useState(false);
  const state = useStateContext();
  const dispatch = useDispatchContext();
  const handleID = (e) => {
    const { value } = e.target;
    setId(value);
  };
  const handleIDSubmit = (e) => {
    e.preventDefault();
    const validConf = state.data.some((conf) => {
      return conf.id === +id;
    });

    if (!validConf) {
      setId("");
      setHasError(true);
      dispatch({ type: "INVALID_ID" });
      return;
    } else {
      dispatch({ type: "UPDATE_VIEW", payload: +id });
      setHasError(false);
    }
  };
  return (
    <form aria-label="form" id="conf-id-form" onSubmit={handleIDSubmit}>
      <div className="form-control">
        <label htmlFor="confID" className="required">
          Conference ID
        </label>
        <input
          id="confID"
          type="number"
          aria-required="true"
          placeholder="Enter conference ID"
          name="id"
          value={id}
          onChange={handleID}
          className="form-input"
          required
        />
      </div>
      <button className="btn btn-primary">Submit</button>
      {hasError && <ErrorMessage msg="Cannot find conference with that ID" />}
    </form>
  );
};

export default ConfIDForm;
