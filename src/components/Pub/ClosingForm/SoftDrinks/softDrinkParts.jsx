import React from "react";
import "../../../styles.css";
//style={{ marginTop: "-25px" }}
const Items = ({ items }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="items">
      <p className="header_p">Items</p>
    </div>
    {/* <label className="header_p">Items</label> */}
    {items.map((i, y) => (
      <p className="rowstyle" key={y}>
        {i}
      </p>
    ))}
  </div>
);
const Opening = ({ opening }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="opening">
      {/* <p className="header_p">Opening</p> */}
    </div>
    {/* <label className="header_p">Opening</label> */}
    {opening.map((o, i) => (
      <p className="rowstyle" key={i}>
        {o}
      </p>
    ))}
  </div>
);
const Sale = ({ sale }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="sale">
      {/* <label className="header_p">Sold</label> */}
      {sale.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Closing = ({ closing }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="closing">
      {/* <label className="header_p">Closing</label> */}
      {closing.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Comments = ({ comments }) => (
  <div>
    <div className="comments">
      {comments.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Delivered = ({ delivered }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="delivered">
      {/* <label className="header_p">Delivered</label> */}
      {delivered.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Difference = ({ difference }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="difference">
      {/* <label className="header_p">Difference</label> */}
      {difference.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const PAR = ({ par }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="par">
      {/* <label className="header_p">PAR</label> */}
      {par.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Transfers = ({ transfers }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="transfers">
      {/* <label className="header_p">Transfers</label> */}
      {transfers.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const Wastage = ({ wastage }) => (
  <div>
    <div style={{ marginTop: "60px" }} className="wastage">
      {/* <label className="header_p">Wastage</label> */}
      {wastage.map((s, i) => (
        <p className="rowstyle" key={i}>
          {s}
        </p>
      ))}
    </div>
  </div>
);
const UpdateClosing = ({ rid, change }) => (
  <div>
    <div style={{ marginTop: "60px" }}>
      <form className="inpute" id="soft">
        {/* <label className="header_p">Update Closing</label> */}
        {rid.map(i => (
          <input
            onChange={change}
            size="7"
            // className="form-control-sm"
            type="text"
            placeholder="Closing"
            key={i}
            id={i}
            name="soft"
          />
        ))}
      </form>
    </div>
  </div>
);

export {
  Items,
  Opening,
  Sale,
  Closing,
  Comments,
  Delivered,
  Difference,
  PAR,
  Transfers,
  Wastage,
  UpdateClosing
};
