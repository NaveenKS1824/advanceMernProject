const mongoose = require("mongoose");
const {v4:uuidv4}=require('uuid');
const productSchema = new mongoose.Schema({
    u_id:{
        type:String,
        default:uuidv4(),
    },
    id:String,
    title:String,
    description:String,
    price:Number,
    category:String,
    image:String,
    rating:{
        rate:Number,
        count:Number,
    },

})

const Product = new mongoose.model('Product',productSchema)
module.exports=Product