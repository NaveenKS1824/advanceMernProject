const express = require('express');
const { createCart, getCart, deleteCart } = require('../controllers/cartController');
const auth = require('../middlewares/auth');

const routes = express.Router();

routes.post('/addOrUpdate',auth,createCart);
routes.get('/get',auth,getCart);
routes.post('/deleteCart/:id',auth,deleteCart);

module.exports = routes;