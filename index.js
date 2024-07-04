const express = require("express")
const mongoose = require("mongoose")
const mongoUri = "mongodb+srv://farazpachu777:farazpachu777@basic-crud-operation.8yhxtyc.mongodb.net/?retryWrites=true&w=majority&appName=Basic-crud-operation"
const Product = require("./models/productModel.js")
const app = express()
const productRoute = require("./routes/productsRoute.js")

mongoose.connect(mongoUri)
.then(()=>{
    console.log("MongoDB Connected.");
}).catch(()=>{
    console.log("MongoDB Connection Failed.");
})

// middleware
app.use(express.json())
app.use(express.urlencoded({extended:false}))


// route
app.use("/api/products",productRoute)

app.get('/',(req, res)=>{
    res.send('Hi there, message from Backend')
})







app.listen(5000,()=>{
    console.log("Server running on port 5000")
})