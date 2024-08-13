const express = require('express');
const { createOrders } = require('../controllers/orderController');
const auth = require("../middlewares/auth");

const routes = express.Router();

routes.post("/postOrder",auth,createOrders);

module.exports = routes;