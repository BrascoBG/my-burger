import React from "react";
import CheckoutSummary from "../../components/Order/CheckoutSummary/CheckoutSummary";

class Checkout extends React.Component {
  state = {
    ingredients: {
      salad: 1,
      bacon: 1,
      cheese: 1,
      meat: 1,
    },
  };

  componentDidMount() {
    const query = new URLSearchParams(this.props.location.search);
    const ingredient = {};
    for (let param of query.entries()) {
      ingredient[param[0]] = +param[1];
    }
    this.setState({ ingredients: ingredient });
  }

  cancelHandler = () => {
    this.props.history.goBack();
  };

  continueHandler = () => {
    this.props.history.replace("/checkout/contact-data");
  };

  render() {
    return (
      <div>
        <CheckoutSummary
          ingredients={this.state.ingredients}
          cancelHandler={this.cancelHandler}
          continueHandler={this.continueHandler}
        />
      </div>
    );
  }
}

export default Checkout;
