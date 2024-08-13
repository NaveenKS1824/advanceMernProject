const mongoose = require('mongoose');
const cartModel = new mongoose.Schema({
    user_id:String,
    products:[{
        product_id:{
            type:String,
        },
        quantity:{
            type:Number,
        },
    },],
});
const Cart = mongoose.model('Cart',cartModel);
module.exports = Cart;