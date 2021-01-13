import React from "react";
import classes from "./Button.css";

const button = (props) => {
    return (
        <button
            className={[classes.Button, classes[props.btnType]].join(" ")} // Passing in multiple classes using array for imported classes
            onClick={props.clicked}
        >
            {props.children}
        </button>
    );
};

export default button;
