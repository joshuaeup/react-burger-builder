import React, { Component } from "react";
// Wrapper with Aux components
import Aux from "../Aux/Aux";
import classes from "./Layout.css";
import Toolbar from "../../components/Navigation/Toolbar/Toolbar";
import SideDrawer from "../../components/Navigation/SideDrawer/SideDrawer";

class Layout extends Component {
    state = {
        showSideDrawer: false,
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false,
        });
    };

    // Setting state when depends on old state
    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { showSideDrawer: !prevState.showSideDrawer };
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar drawerToggleClicked={this.sideDrawerToggleHandler} />
                <SideDrawer
                    open={this.state.showSideDrawer}
                    closed={this.sideDrawerClosedHandler}
                />
                {/* Using the classes import to assign css values (modules) */}
                <main className={classes.Content}>{this.props.children}</main>
            </Aux>
        );
    }
}

export default Layout;
