const express = require("express");
const Product = require("../models/product.model.js");
const router = express.Router();
const { getProducts, getProduct, createProduct, updateProduct, deleteProduct } = require('../controller/product.controller.js');


// Get All products
router.get('/', getProducts);

// Get specific Product by Id
router.get("/:id", getProduct);

// Create new product
router.post("/", createProduct);

// update a product
router.put("/:id", updateProduct);

// delete a product
router.delete("/:id", deleteProduct);


module.exports = router;