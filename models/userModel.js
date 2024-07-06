const mongoose = require("mongoose")

const userSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        age:{
            type:Number,
            required:true,
        },
        gmail:{
            type:String,
            required:true,
            unique:true
        },
        place:{
            type:String,
            required:true,
        },
        phone:{
            type:Number,
            required:true,
            unique:true
        },
    },
    {
        timestamps:true,
    }
)

const User = mongoose.model("User", userSchema)
module.exports = User