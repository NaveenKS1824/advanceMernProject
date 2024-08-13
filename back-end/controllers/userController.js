const User = require('../models/userModel');
const {v4:uuidv4} = require('uuid');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
exports.createUser = async (req,res) =>{
    try{
        const { name,email,password} = req.body;
        const user = new User({
            id:uuidv4(), 
            name,
            email,
            password,
        })
        await user.save();
        res.send(user);
    }catch(err){
        console.log(err);
    }
}
exports.login = async(req,res)=>{
    const {email,password}= req.body;
    try{
        const user = await User.findOne({email});
        if(!user){
            res.status(400).json("Invalid Email or password");
        }
        const isMatch = await bcrypt.compare(password,user.password);
        if(!isMatch){
            return res.status(400).json("Invalid password");
        }
        const token = jwt.sign({user_id:user._id},"secret_token",{
            expiresIn:"1h",
        })
        res.status(200).json(token)    
    }
    catch(err){
        console.log(err);
    }
}