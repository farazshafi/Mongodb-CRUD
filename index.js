const express = require("express")
const mongoose = require("mongoose")
const mongoUri = "mongodb+srv://farazpachu777:farazpachu777@basic-crud-operation.8yhxtyc.mongodb.net/?retryWrites=true&w=majority&appName=Basic-crud-operation"
const Product = require("./models/productModel.js")
const app = express()
const productRoute = require("./routes/productsRoute.js")
const userRoute = require("./routes/userRoute.js")
const classRoute = require("./routes/classRoute.js")


mongoose.connect(mongoUri)
.then(()=>{
    console.log("MongoDB Connected.");
}).catch((err)=>{
    console.log("MongoDB Connection Failed.",err);
})

// middleware
app.use(express.json()); // Parses incoming requests with JSON payloads
app.use(express.urlencoded({ extended: false })); // Parses incoming requests with URL-encoded payloads



// products
app.use("/api/products",productRoute)
// users
app.use("/api/users",userRoute)
// class
app.use("/api/class",classRoute)

app.get('/',(req, res)=>{
    res.send('Hi there, message from Backend') 
})

app.listen(5000,()=>{
    console.log("Server running on port 5000")
})