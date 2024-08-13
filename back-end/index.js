const express = require("express");
const app = express();
const mongoose = require("mongoose");
const productRoutes = require("./routes/productRoutes");
const userRoutes = require('./routes/userRoutes');
const cartRoutes = require('./routes/cartRoutes');
const orderRoutes = require('./routes/orderRoutes');
const cors = require('cors');

mongoose.connect(
    "mongodb://localhost:27017/ecom"
).then(()=>{
    console.log("Connected to databases");
}).catch((e)=>{
    console.log("connection error");
})

app.use(cors());
app.use(express.json());
app.use("/",productRoutes)
app.use('/user',userRoutes)
app.use('/cart',cartRoutes);
app.use('/order',orderRoutes);

app.listen(3000,()=>{
    console.log("server is running on port 3000");
})