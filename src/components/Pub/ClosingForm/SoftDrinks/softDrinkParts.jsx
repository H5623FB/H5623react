import React from "react";
import "../../../styles.css";
//style={{ marginTop: "-25px" }}
const Items = ({ items }) => (
  <div>
    <div wrapper="wrapper" style={{ marginTop: "20px" }} className="items">
      <p className="h_items">Items</p>
    
    {/* <label className="header_p">Items</label> */}
    {items.map((i, y) => (
      <p className="rowstyle" key={y}>
        {i}
      </p>
    ))}
    </div>
  </div>
);
const Opening = ({ opening }) => (
  <div>
    <div style={{ marginTop: "20px" }} className="opening">
    <p className="h_opening">Open</p>
      {/* <p className="header_p">Opening</p> */}
    
    {/* <label className="header_p">Opening</label> */}
    {opening.map((o, i) => (
      <p className="rowstyle" key={i}>
        {o}
      </p>
    ))}
    </div>
  </div>
);
const Sale = ({ sale }) => (
  <div>
    <div style={{ marginTop: "20px" }} className="sale">
      {/* <label className="header_p">Sold</label> */}
      <p className="h_sale">Sale</p>
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
    <div style={{ marginTop: "20px" }} className="closing">
    <p className="h_closing">Closing</p>
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
    <div style={{ marginTop: "20px" }} className="delivered">
    <p className="h_delivered">Delivered</p>
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
    <div style={{ marginTop: "20px" }} className="difference">
    <p className="h_difference">Diff</p>
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
    <div style={{ marginTop: "20px" }} className="par">
    <p className="h_par">PAR</p>
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
    <div style={{ marginTop: "20px" }} className="transfers">
    <p className="h_transfers">Transfers</p>
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
    <div style={{ marginTop: "20px" }} className="wastage">
    <p className="h_wastage">Wastage</p>
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
    <div style={{ marginTop: "20px" }}>
      <form className="inpute" id="soft">
      <p className="h_inpute">Update</p>
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
