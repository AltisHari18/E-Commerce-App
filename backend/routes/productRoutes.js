const express = require("express");

const router = express.Router();

const {
  getProducts,
  createProduct
} = require("../controllers/productController");

const protect = require("../middleware/authMiddleware");

const admin = require("../middleware/adminMiddleware");

router.get("/", getProducts);

router.post(
  "/",
  protect,
  admin,
  createProduct
);

module.exports = router;