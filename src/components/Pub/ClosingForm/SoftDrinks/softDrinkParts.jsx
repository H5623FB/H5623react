import React from "react";
import "../../../styles.css";

const Items = ({ items }) => (
  <div>
    <div className="header1">Items</div>
    <div className="items">
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
    <div className="header3">Opening</div>
    <div className="opening">
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
    <div className="header7">Sold</div>
    <div className="sale">
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
    <div className="header4">Closing</div>
    <div className="closing">
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
    <div className="header10">Comments</div>
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
    <div className="header4">Delivered</div>
    <div className="delivered">
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
    <div className="header8">Difference</div>
    <div className="difference">
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
    <div className="header2">PAR</div>
    <div className="par">
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
    <div className="header5">Transfers</div>
    <div className="transfers">
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
    <div className="header6">Wastage</div>
    <div className="wastage">
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
    <div className="header9">Update</div>
    <div>
      <form id="myform" className="inpute">
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
