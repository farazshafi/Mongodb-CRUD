const { compare } = require("bcryptjs")
const User = require("../models/userModel.js")

// desc  Find all users
// mehtod  GET 
// api  api/users
const getAllUsers =async (req,res) => {
    try{
        const users = await User.find({place:{$ne:"kasaragod"}})
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

// desc  Register a users
// mehtod  POST 
// api  api/users/register
const registerUser =async (req,res) => {
    try{
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

// desc  login a users
// mehtod  POST 
// api  api/users/login
const loginUser =async (req,res) => {
    try{
        const {gmail,password} = req.body
        const user = await User.findOne({gmail})
        if(user && (await user.matchPassword(password))){
            res.status(200).json(user)
        }else{
            res.status(400).json({message:"Invalid password or gmail"})
        }
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

module.exports = {getAllUsers,registerUser,loginUser}