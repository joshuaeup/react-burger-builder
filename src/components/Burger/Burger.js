import React from "react";
import classes from "./Burger.css";
import BurgerIngredient from "./BurgerIngredient/BurgerIngredient";

const burger = (props) => {
    // Object.keys generates an array of strings. the string being the keys in the object
    let transformedIngredients = Object.keys(props.ingredients)
        .map((igKey) => {
            // Return a new array of with a length of the values inside the ingredients array by using bracket notation
            return [...Array(props.ingredients[igKey])].map((_, i) => {
                // Return a new BurgerIngredient Component and pass the unique identifer(Sting name) for the key
                // And pass the identifier (String name) for the type
                return <BurgerIngredient key={igKey + i} type={igKey} />;
            });
        })
        .reduce((arr, el) => {
            // Reduce method receives the previous value and current value of array. and initial value as second param(Flattening array)
            return arr.concat(el);
        }, []);

    // Conditional to check size of flattened array
    if (transformedIngredients.length === 0) {
        transformedIngredients = <p>Please start adding ingredients</p>;
    }
    return (
        <div className={classes.Burger}>
            <BurgerIngredient type="bread-top" />
            {transformedIngredients}
            <BurgerIngredient type="bread-bottom" />
        </div>
    );
};

export default burger;
