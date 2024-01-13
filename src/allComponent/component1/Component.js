import React from 'react';
import classes from "./component.module.css";

const Component = ( {text} ) => {
    return (
        <div className={classes.component}>
            <h1>
                {text}
            </h1>
        </div>
    );
};

export default Component;