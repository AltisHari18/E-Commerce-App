import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div
      style={{
        background: "black",
        color: "white",
        padding: "15px",
        display: "flex",
        justifyContent: "space-between"
      }}
    >
      <h2>E-Commerce</h2>

      <div
        style={{
          display: "flex",
          gap: "20px"
        }}
      >
        <Link to="/">Home</Link>

        <Link to="/cart">Cart</Link>

        <Link to="/orders">Orders</Link>

        <Link to="/login">Login</Link>
      </div>
    </div>
  );
}

export default Navbar;