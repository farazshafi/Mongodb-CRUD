const express = require("express");
const router = express.Router()
const { addProduct, deleteProduct, getAllProducts, getSingleProduct, updateProduct } = require("../controller/productController.js")

router
    .get("/", getAllProducts)
    .get("/:id", getSingleProduct)
router.post("/", addProduct)
router.put("/:id", updateProduct)
router.delete("/:id", deleteProduct)

module.exports = router