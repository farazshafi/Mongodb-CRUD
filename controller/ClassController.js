const Class = require("../models/classModel.js")

// desc  Find all classroom
// mehtod  GET 
// api  api/class
const getAllClass =async (req,res) => {
    try{
        const users = await Class.find({}).populate('students')
        res.status(200).json(users)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

// desc  Add a classroom
// mehtod  POST 
// api  api/class
const addClass =async (req,res) => {
    try{
        const {name, maxStudents, school, floorNumber, students} = req.body
        const newClass = await Class.create({
            name,
            maxStudents,
            school,
            floorNumber,
            students
        })
        res.status(200).json(newClass)
    }catch(err){
        res.status(500).json({message:err.message})
    }
}

// desc  Add a studnet
// mehtod  PUT 
// api  api/class/:classId
const addStudent = async (req, res) => {
    try {
      const { classId } = req.params;
      const { studentId } = req.body;
  
      // Use $addToSet to ensure the student is added only if they are not already in the array
      const updatedClass = await Class.findByIdAndUpdate(classId,{ $addToSet: { students: studentId } },{ new: true }).populate('students');

      res.status(200).json(updatedClass);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

// desc  delete a studnet
// mehtod  PUT 
// api  api/class/:classId
const deleteStudent = async (req, res) => {
  try {
    const { classId } = req.params;
    const { studentId } = req.body;

    // Use findByIdAndUpdate to remove the studentId from the students array
    const updatedClass = await Class.findByIdAndUpdate(
      classId,
      { $pull: { students: studentId } },
      { new: true } // Ensures the returned document is the updated one
    ).populate('students');

    res.status(200).json(updatedClass);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

  
  

module.exports = {getAllClass,addClass,addStudent,deleteStudent}