import React from "react";
import axios from "axios";
import Order from "../../components/Order/Order";

class Orders extends React.Component {
  state = {
    orders: [],
    loading: true,
  };

  componentDidMount() {
    axios
      .get("https://my-burger-e2340.firebaseio.com/orders.json")
      .then((res) => {
        const fetchedOrders = [];
        for (let key in res.data) {
          fetchedOrders.push({
            ...res.data[key],
            id: key,
          });
        }
        console.log(fetchedOrders);
        this.setState({ loading: false, orders: fetchedOrders });
      })
      .catch((err) => {
        this.setState({ loading: false });
      });
  }

  render() {
    return (
      <div>
        {this.state.orders.map((order) => (
          <Order
            key={order.id}
            ingredients={order.ingredients}
            price={+order.price}
          />
        ))}
      </div>
    );
  }
}

export default Orders;
