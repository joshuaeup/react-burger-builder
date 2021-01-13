import React from "react";
// Webpack stored optimized image
import burgerLogo from "../../assets/images/burger-logo.png";
import classes from "./Logo.css";

const logo = (props) => {
    return (
        <div className={classes.Logo} style={{ height: props.height }}>
            <img src={burgerLogo} alt="MyBurger" />
        </div>
    );
};

export default logo;
