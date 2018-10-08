import React from 'react';
import "./styles.css";

const Submit = ({ submit }) => (
    <div>
    <button className="btn btn-success" onClick={submit}>
      Submit
    </button>
  </div>
);

export default Submit;