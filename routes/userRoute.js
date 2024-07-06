const express = require("express")
const router = express.Router()
const {getAllUsers,addUser} = require("../controller/userController.js")

router.get("/",getAllUsers)
router.post("/",addUser)

module.exports = router