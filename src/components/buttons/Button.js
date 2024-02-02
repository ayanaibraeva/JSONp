import React from 'react';
import classes from "./Button.module.css";

const Button = ( { text, onClick } ) => {
    return (
        <button onClick={onClick}>{text}</button>
    );
};

export default Button;