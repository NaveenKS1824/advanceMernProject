
// const ProductController = require("../controllers/ProductController");
const express = require("express");
const auth = require('../middlewares/auth')
const { getProducts, createProduct } = require("../controllers/ProductController");
const routes = express.Router()
routes.get("/api/getProducts",getProducts);
routes.post('/api/postProduct',createProduct);

module.exports =routes;