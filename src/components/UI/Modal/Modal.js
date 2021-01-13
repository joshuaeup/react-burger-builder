import React from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aus";
import Backdrop from "../Backdrop/Backdrop";

const modal = (props) => {
    return (
        <Aux>
            <Backdrop show={props.show} clicked={props.modalClosed} />
            <div
                className={classes.Modal}
                style={{
                    transform: props.show
                        ? "translateY(0)"
                        : "translateY(-100vh", // Adds inline style for toggle show depending on show state
                    opacity: props.show ? "1" : "0",
                }}
            >
                {props.children}
            </div>
        </Aux>
    );
};

export default modal;
