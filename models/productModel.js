const { Timestamp } = require("mongodb")
const mongoose = require("mongoose")

const ProductSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: [true, "Please enter Product name"],
        },
        
        quantity: {
            type: Number,
            required: true,
        },
        
        price: { 
            type: Number,
            required: true,
        },

        image: { 
            type: Number,
            required:false
        },
    },
    {
        timestamps:true
    }
)

const Product = mongoose.model("Product",ProductSchema)
module.exports = Product