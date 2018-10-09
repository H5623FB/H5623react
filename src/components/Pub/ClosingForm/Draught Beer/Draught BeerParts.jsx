import React from "react";
import "../../../styles.css";

const Items = ({ items }) => (
  <div>
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
    <div>
      <form className="inpute" id="dbeer">
        {rid.map(i => (
          <input
            onChange={change}
            size="7"
            // className="form-control-sm"
            type="text"
            placeholder="Closing"
            key={i}
            id={i}
            name="dbeer"
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
