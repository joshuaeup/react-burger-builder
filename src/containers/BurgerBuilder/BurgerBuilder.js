import React, { Component } from "react";
import Aux from "../../hoc/Aux/Aus";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

const INGREDIENT_PRICES = {
    salad: 0.5,
    cheese: 0.4,
    meat: 1.3,
    bacon: 0.7,
};

class BurgerBuilder extends Component {
    state = {
        ingredients: {
            salad: 0,
            bacon: 0,
            cheese: 0,
            meat: 0,
        },
        totalPrice: 4,
        purchaseable: false,
        purchasing: false,
    };

    updatePurchaseState = (ingredients) => {
        const sum = Object.keys(ingredients)
            .map((igKey) => {
                return ingredients[igKey];
            })
            .reduce((sum, el) => {
                return sum + el;
            }, 0);
        this.setState({ purchaseable: sum > 0 });
    };

    addIngredientHandler = (type) => {
        // Capture old state at a given type
        const oldCount = this.state.ingredients[type];
        // Add one to previous state
        const updatedCount = oldCount + 1;
        // Capture entire ingredients array
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        // Pass updated count to entire ingredient array copy
        updatedIngredients[type] = updatedCount;
        // Capture price for item at specific type
        const priceAddition = INGREDIENT_PRICES[type];
        // Capture old state of total price
        const oldPrice = this.state.totalPrice;
        // Add priceAddition to previous state
        const newPrice = oldPrice + priceAddition;
        // Set state for new updated values
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    removeIngredientHandler = (type) => {
        // Capture old state at a given type
        const oldCount = this.state.ingredients[type];

        // Ensue count is above 0 before decrementing
        if (oldCount <= 0) {
            return;
        }
        // Subtract one to previous state
        const updatedCount = oldCount - 1;
        // Capture entire ingredients array
        const updatedIngredients = {
            ...this.state.ingredients,
        };
        // Pass updated count to entire ingredient array copy
        updatedIngredients[type] = updatedCount;
        // Capture price for item at specific type
        const priceDeduction = INGREDIENT_PRICES[type];
        // Capture old state of total price
        const oldPrice = this.state.totalPrice;
        // Subtract priceDeduction to previous state
        const newPrice = oldPrice - priceDeduction;
        // Set state for new updated values
        this.setState({
            totalPrice: newPrice,
            ingredients: updatedIngredients,
        });
        this.updatePurchaseState(updatedIngredients);
    };

    purchaseHandler = () => {
        this.setState({
            purchasing: true,
        });
    };

    purchaseCancelHandler = () => {
        this.setState({
            purchasing: false,
        });
    };

    purchaseContinueHandler = () => {
        alert("Purchased!");
    };

    // Tells React what to render with JSX
    render() {
        const disabledInfo = {
            // Copy ingredients object
            ...this.state.ingredients,
        };
        // Loop through all keys in disabledInfo
        for (let key in disabledInfo) {
            // Check if value at specific key is less than or equal to 0 then returns true or false
            disabledInfo[key] = disabledInfo[key] <= 0;
        }
        return (
            <Aux>
                <Modal
                    show={this.state.purchasing}
                    modalClosed={this.purchaseCancelHandler}
                >
                    <OrderSummary
                        ingredients={this.state.ingredients}
                        price={this.state.totalPrice}
                        purchaseCanceled={this.purchaseCancelHandler}
                        purchaseContinued={this.purchaseContinueHandler}
                    />
                </Modal>
                <Burger ingredients={this.state.ingredients} />
                <BuildControls
                    ingredientAdded={this.addIngredientHandler}
                    ingredientSubtracted={this.removeIngredientHandler}
                    disabled={disabledInfo}
                    purchaseable={this.state.purchaseable}
                    ordered={this.purchaseHandler}
                    price={this.state.totalPrice}
                />
            </Aux>
        );
    }
}

export default BurgerBuilder;
