import React from 'react';
import classes from "./Card.module.css";

const Card = ( {base} ) => {
    return (
        <div className={classes.card}>
            <h2>{base.title && base.title}</h2>
            <p>{base.body && base.body}</p>
            <p>{base.name && base.name}</p>
            <p>{base.username && base.username}</p>
            <p>{base.email && base.email}</p>
            <img style={{width: "100px"}} src={base.url && base.url} alt=""/>
        </div>
    );
};

export default Card;