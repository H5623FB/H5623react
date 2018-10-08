import React from 'react';
import "./styles.css";

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

export default Closing;