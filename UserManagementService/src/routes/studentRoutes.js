const router = require("express").Router();

const { allStudents, updateStudent, deleteStudent, singleStudent, searchstudents } = require('../controllers/studentController');

// Get all the students
router.get("/", allStudents);

// Update a student
router.put("/update/:id", updateStudent);

// Delete a single student
router.delete("/delete/:id", deleteStudent);

// Get details of a single student
router.get("/get/:id", singleStudent);

// search students
router.get("/search/:key", searchstudents);

module.exports = router;