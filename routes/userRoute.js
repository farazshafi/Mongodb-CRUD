const express = require("express")
const router = express.Router()
const {getAllUsers,registerUser,loginUser} = require("../controller/userController.js")

router.get("/",getAllUsers)
router.post("/register",registerUser)
router.post("/login",loginUser)


module.exports = router