const mongoose = require('mongoose');
const {v4:uuidv4}=require('uuid');
const OrderSubSchema = new mongoose.Schema(
    {
        cust_name:{
            type:String
        },
        cust_address:{
            type:String,
        },
        cust_phoneNo:{
            type:Number,
        },
        products:[
            {
                product_id:String,
                quantity:Number,
            },
        ],
        ordered_date:{
            type:Date,
            default:Date.now,
        },
        estimateDeliveryDate:{
            type:Date,
            default:new Date(Date.now() + 10 * 24 * 60 * 60 * 1000),
        },
        user_email:String,
    },{_id:false}
)
const orderSchema= new mongoose.Schema({
    order_id:{
        type:String,
        default:uuidv4,
    },
    Orders:[OrderSubSchema],
});
const Order = mongoose.model('Order', orderSchema);
module.exports = Order;
