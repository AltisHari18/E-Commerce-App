const mongoose = require("mongoose");

const orderSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },

  products: [
    {
      product: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product"
      },

      quantity: Number
    }
  ],

  totalAmount: Number,

  status: {
    type: String,
    default: "Pending"
  }
});

module.exports = mongoose.model(
  "Order",
  orderSchema
);