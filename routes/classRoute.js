const express = require("express")
const router = express.Router()
const {addClass,getAllClass,addStudent,deleteStudent} = require("../controller/ClassController")

router.get("/",getAllClass)
router.post("/",addClass)
router.put("/:classId/add",addStudent)
router.put("/:classId/remove",deleteStudent)


module.exports = router