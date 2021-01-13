import React from "react";
// Wrapper with Aux components
import Aux from "../../hoc/Aus";
import classes from "./Layout.css";
import Toolbar from "../Navigation/Toolbar/Toolbar";
import SideDrawer from "../Navigation/SideDrawer/SideDrawer";

const layout = (props) => (
    <Aux>
        <Toolbar />
        <SideDrawer />
        {/* Using the classes import to assign css values (modules) */}
        <main className={classes.Content}>{props.children}</main>
    </Aux>
);

export default layout;
