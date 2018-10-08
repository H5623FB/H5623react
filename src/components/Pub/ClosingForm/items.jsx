import React from 'react';
import "./styles.css";

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

export default Items;