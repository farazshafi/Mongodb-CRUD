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

// desc  Add a users
// mehtod  POST 
// api  api/users
const addUser =async (req,res) => {
    try{
        console.log(req.body);
        const user = await User.create(req.body)
        res.status(200).json(user)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}



module.exports = {getAllUsers,addUser}