import React from 'react';
import "./styles.css";

const UpdateClosing = ({ rid, change }) => (
    <div>
        <div  className="header5">
                Update Closing
        </div>
        <div>
        <form id="myform"className="inpute">
            {rid.map(i => (
            <input
                onChange={change}
                className="form-control"
                label="update"
                type="text"
                placeholder="Closing"
                id={i}
                key={i}
                name="myForm"
            />
            ))}
        </form>
        </div>
  </div>
);

export default UpdateClosing;
