import React from 'react';
import "../../../styles.css"

const Items = ({ items }) => (
    <div>
        <div className="header1">
            Items
        </div>
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
        <div className="header2">
            Opening
        </div>  
        <div className="opening">
                    {opening.map((o,i) => (
                    <p className="rowstyle" key={i}>
                        {o}
                    </p>
                    ))}
        </div>
    </div>
);
const Sale = ({ sale }) => (
    <div>
        <div className="header3">
            Sale
        </div>
        <div  className="sale">
            {sale.map((s, i) => (
            <p  className="rowstyle" key={i}>
                {s}
            </p>
        ))}
        </div>
  </div>
);
const Closing = ({ closing }) => (
    <div>
        <div  className="header4">
            Closing
        </div>
        <div  className="closing">
            {closing.map((s, i) => (
            <p  className="rowstyle" key={i}>
                {s}
            </p>
            ))}
        </div>
  </div>
);
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

export {Items, Opening, Sale, Closing, UpdateClosing};
