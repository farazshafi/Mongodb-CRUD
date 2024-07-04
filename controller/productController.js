const { del } = require("express/lib/application")
const Product = require("../models/productModel.js")

// GET- All products
// url : api/products/
const getAllProducts=async(req,res)=> {
    try{
        const product = await Product.find({})
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
} 

// GET- Single products
// url : api/products/:id
const getSingleProduct=async(req,res)=> {
    try{
        const {id} = req.params
        const product = await Product.findById(id)
        if(!product){
            console.log("Product not found.");
        }
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
} 

// POST- Add Product
// url : api/products/
const addProduct=async(req,res)=> {
    try{
        const product = await Product.create(req.body)
        res.status(200).json(product)
    }catch(error){
        res.status(500).json({message:error.message})
    }
} 

// PUT- Update Product
// url : api/products/:id
const updateProduct=async(req,res)=> {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id,req.body)
        if(!product){
            console.log("Product not found.");
        }
        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    }catch(error){
        res.status(500).json({message:error.message})
    }
} 

// DELETE- Delete Product
// url : api/products/:id
const deleteProduct=async(req,res)=> {
    try{
        const {id} = req.params
        const product = await Product.findByIdAndDelete(id)
        if(!product){
            console.log("Product not found");
        }
        res.status(200).json("Product Deleted")
    }catch(error){
        res.status(500).json({message:error.message})
    }
} 

module.exports = {getAllProducts, addProduct, deleteProduct, updateProduct, getSingleProduct}