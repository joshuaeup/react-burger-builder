import React, { Component } from "react";
import classes from "./Modal.css";
import Aux from "../../../hoc/Aux/Aus";
import Backdrop from "../Backdrop/Backdrop";

class Modal extends Component {
    // Returns false if the show prop is not true. Meaning do not update unless modal is viewable
    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show;
    }

    render() {
        return (
            <Aux>
                <Backdrop
                    show={this.props.show}
                    clicked={this.props.modalClosed}
                />
                <div
                    className={classes.Modal}
                    style={{
                        transform: this.props.show
                            ? "translateY(0)"
                            : "translateY(-100vh", // Adds inline style for toggle show depending on show state
                        opacity: this.props.show ? "1" : "0",
                    }}
                >
                    {this.props.children}
                </div>
            </Aux>
        );
    }
}

export default Modal;
