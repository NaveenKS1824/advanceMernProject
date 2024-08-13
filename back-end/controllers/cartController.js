const Cart = require('../models/cartModel');
const Product = require('../models/productModel');

exports.createCart = async (req,res)=>{
    const {user_id}=req.user
    const {product_id,quantity} = req.body;
    let item = await Cart.findOne({user_id});
    if(!item){
        item = new Cart({
            user_id,
            products:[{product_id,
            quantity,}]
        });
    }
    const productIndex = item.products.findIndex(
        (props)=>props.product_id===product_id
    )
    if(productIndex==-1){
        item.products.push({product_id,quantity});
    }
    else{
        item.products[productIndex].quantity=quantity;
    }
    await item.save();
    res.status(201).json({message:"Products is added/updated in the cart"});
}

exports.getCart = async(req,res)=>{
    const {user_id}=req.user;
    const user = await Cart.findOne({user_id});
    const products = await Product.find();
    if(user){
        const list = user.products;
        const result = list.map((item1)=>{
        const match = products.find(item2=>item1.product_id==item2._id)
        return {product_id:match._id,
            title:match.title,
            description:match.description,
            price:match.price,
            image:match.image,
            quantity:item1.quantity}});
        res.status(202).json(result);
    }
    else{
        res.status(400).json("No user Find");
    }
}
exports.deleteCart = async(req,res)=>{
    const {user_id}=req.user;
    const user = await Cart.findOne({user_id});
    if(user){
        const product_id= req.params.id;
        if(!product_id){
            res.status.json({message:"Product is not found"});
        }
        const deleted = user.products.filter((item)=> item.product_id != product_id);
        const Remaining = await Cart.findOneAndUpdate({user_id},{products:deleted});
        res.status(200).json({Remaining:Remaining});
    }
    else{
        res.status(404).json("No Item Found");
    }
}