import React from "react";

function ProductCard({ product, addToCart }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "20px",
        borderRadius: "10px",
        background: "white"
      }}
    >
      <img
        src={product.image}
        alt={product.name}
        width="100%"
        height="200"
      />

      <h3>{product.name}</h3>

      <p>{product.description}</p>

      <h4>₹ {product.price}</h4>

      <button
        onClick={() => addToCart(product)}
      >
        Add To Cart
      </button>
    </div>
  );
}

export default ProductCard;