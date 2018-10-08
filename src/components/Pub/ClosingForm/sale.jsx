import React from 'react';
import "./styles.css";

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

export default Sale;
