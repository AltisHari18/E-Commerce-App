import React from "react";
import axios from "axios";

function Checkout({ cart }) {
  const checkoutHandler = async () => {
    const token =
      localStorage.getItem("token");

    const products = cart.map((item) => ({
      product: item._id,
      quantity: 1
    }));

    const totalAmount = cart.reduce(
      (acc, item) => acc + item.price,
      0
    );

    await axios.post(
      "http://localhost:5000/api/orders",
      {
        products,
        totalAmount
      },
      {
        headers: {
          Authorization: `Bearer ${token}`
        }
      }
    );

    alert("Order Placed");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Checkout</h2>

      <button onClick={checkoutHandler}>
        Place Order
      </button>
    </div>
  );
}

export default Checkout;