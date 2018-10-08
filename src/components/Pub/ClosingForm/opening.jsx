import React from 'react';
import "./styles.css";

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

export default Opening;




