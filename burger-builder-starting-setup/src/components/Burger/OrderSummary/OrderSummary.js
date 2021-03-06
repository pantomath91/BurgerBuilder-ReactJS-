import React from "react";
import Aux from "../../../hoc/Aux";
import Button from "../../UI/Button/Button";
const orderSummary = props => {
  const ingredientSummary = Object.keys(props.ingredients).map(igKey => {
    return (
      <li key={igKey}>
        {<span style={{ textTransform: "capitalize" }}>{igKey}</span>}:
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <Aux>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <p>
        <strong>Your price:{props.price}</strong>
      </p>
      <ul>{ingredientSummary}</ul>
      <p>Continue to Checkout?</p>
      <Button btnType="Danger" clicked={props.purchaseCancelled}>
        Continue
      </Button>
      <Button btnType="Success" clicked={props.purchaseContinued}>
        Cancel
      </Button>
    </Aux>
  );
};

export default orderSummary;
