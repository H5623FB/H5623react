import React from "react";
import "../../../styles.css";

const Items = ({ items }) => (
  <div>
    <div wrapper="wrapper" style={{ marginTop: "20px" }} className="items">
      <p className="h_items">Items</p>
      {items.map((i, y) => (
        <p className="rowstyle" key={y}>
          {i}
        </p>
      ))}
    </div>
  </div>
);
const Wastage = ({ wastage }) => (
  <div>
    <div style={{ marginTop: "20px" }} className="wastage">
      {wastage.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);

const UpdateWastage = ({ rid, change }) => (
  <div>
    <div style={{ marginTop: "20px" }}>
      <form className="inpute" id="spwast">
        <p className="h_inpute">Update</p>

        {rid.map(i => (
          <input
            onChange={change}
            size="7"
            // className="form-control-sm"
            type="text"
            placeholder="Wastage"
            key={i}
            id={i}
            name="spwast"
          />
        ))}
      </form>
    </div>
  </div>
);

export { Items, Wastage, UpdateWastage };
