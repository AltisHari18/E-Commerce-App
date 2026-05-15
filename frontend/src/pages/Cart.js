import React from "react";

import { Link } from "react-router-dom";

function Cart({ cart }) {
  const total = cart.reduce(
    (acc, item) => acc + item.price,
    0
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Cart</h2>

      {cart.map((item, index) => (
        <div
          key={index}
          style={{
            background: "white",
            padding: "10px",
            marginBottom: "10px"
          }}
        >
          <h3>{item.name}</h3>

          <p>₹ {item.price}</p>
        </div>
      ))}

      <h2>Total: ₹ {total}</h2>

      <Link to="/checkout">
        <button
          style={{
            padding: "10px 20px",
            marginTop: "20px",
            cursor: "pointer"
          }}
        >
          Proceed To Checkout
        </button>
      </Link>
    </div>
  );
}

export default Cart;