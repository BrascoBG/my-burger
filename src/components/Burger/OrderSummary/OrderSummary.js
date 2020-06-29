import React from "react";
import Button from "../../UI/Button/Button";

const orderSummary = (props) => {
  const ingredientsSummary = Object.keys(props.ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {props.ingredients[igKey]}
      </li>
    );
  });
  return (
    <React.Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientsSummary}</ul>
      <p>
        <strong>Total Price: {props.price.toFixed(2)}</strong>
      </p>
      <p>Continue to CheckOut?</p>
      <Button clicked={props.cancel} btnType="Danger">
        CANCEL
      </Button>
      <Button clicked={props.continue} btnType="Success">
        CONTINUE
      </Button>
    </React.Fragment>
  );
};

export default orderSummary;
