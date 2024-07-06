const mongoose = require("mongoose")

const classSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        },
        maxStudents:{
            type:Number,
            required:true,
            default:10
        },
        school:{
            type:String,
            required:true
        },
        floorNumber:{
            type:Number,
            required:true
        },
        students:[
            {
                type:mongoose.Schema.ObjectId,
                required:true,
                ref:"User"
            }
        ]
    },
    {
        timestamps:true,
    }
)

const Class = mongoose.model("Class", classSchema)
module.exports = Class