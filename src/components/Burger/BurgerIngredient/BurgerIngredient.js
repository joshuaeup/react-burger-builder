import React, { Component } from "react";

import classes from "./BurgerIngredient.css";
// prop validation
import PropTypes from "prop-types";

// Class to hold ingredients
class BurgerIngredient extends Component {
    render() {
        let ingredient = null;

        // Switch statement to switch div result depending on type passed to component
        switch (this.props.type) {
            case "bread-bottom":
                // Logic
                ingredient = <div className={classes.BreadBottom}></div>;
                break;
            case "bread-top":
                // Logic
                ingredient = (
                    <div className={classes.BreadTop}>
                        <div className={classes.Seeds1}></div>
                        <div className={classes.Seeds2}></div>
                    </div>
                );
                break;
            case "meat":
                ingredient = <div className={classes.Meat}></div>;
                break;
            case "cheese":
                ingredient = <div className={classes.Cheese}></div>;
                break;
            case "salad":
                ingredient = <div className={classes.Salad}></div>;
                break;
            case "bacon":
                ingredient = <div className={classes.Bacon}></div>;
                break;
            default:
                ingredient = null;
        }

        return ingredient;
    }
}
// Ensures ingredient component requires a  type attribute of type string
BurgerIngredient.propTypes = {
    type: PropTypes.string.isRequired,
};

export default BurgerIngredient;
