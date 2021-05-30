import React from 'react';

import classes from './Card.module.css';
// import './Card.module.css';

const Button = (props) => {
    // const classes = 'card ' + props.className;

    return <button
        className={classes.button}
        type={props.type || 'button'}
        onClick={props.onClick}>{props.children}
    </button>;
};

export default Button;
