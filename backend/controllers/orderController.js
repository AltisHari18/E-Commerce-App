const Order = require("../models/Order");

const createOrder = async (req, res) => {
  const order = await Order.create(req.body);

  res.json(order);
};

const getOrders = async (req, res) => {
  const orders = await Order.find()
    .populate("user")
    .populate("products.product");

  res.json(orders);
};

module.exports = {
  createOrder,
  getOrders
};