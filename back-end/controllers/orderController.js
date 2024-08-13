const OrderModel = require("../models/orderModel");
const ProductModel = require("../models/productModel");
const CartModel = require("../models/cartModel");
const UserModel = require("../models/userModel");

exports.createOrders = async(req,res)=>{
    const {cust_address,cust_phonNo}= req.body;
    const {user_id}=req.user;
    try{
        const user = await CartModel.findOne({user_id});
        const userDetails = await UserModel.findOne({_id:user_id});
        if(user){
            const order = new OrderModel({
                Orders:[
                    {
                        cust_name:userDetails.name,
                        cust_address:cust_address,
                        cust_phoneNo:cust_phonNo,
                        cust_name:userDetails.name,
                        user_email:userDetails.email,
                        products:user.products
                    }
                ],
            });
            const orderDetails = await order.save();
            res.status(200).json(orderDetails);
        }

    }catch(err){
        console.log(err);
    }
}