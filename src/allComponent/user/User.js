import React from 'react';
import classes from "./user.module.css";

const User = ({name, children}) => {
    return (
        <div className={classes.box}>
            <h1 className={classes.name}>{name}</h1>
                {children}
        </div>
    );
};

export default User;