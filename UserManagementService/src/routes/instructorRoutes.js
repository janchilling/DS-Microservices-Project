const router = require("express").Router();

const { allInstructor, updateInstructor, deleteiIstructor, singleInstructor, searchInstructors } = require('../controllers/instructorController');

// Get all the instructors
router.get("/", allInstructor);

// Update a instructor
router.put("/update/:id", updateInstructor);

// Delete a single instructor
router.delete("/delete/:id", deleteiIstructor);

// Get details of a single instructor
router.get("/get/:id", singleInstructor);

// search instructors
router.get("/search/:key", searchInstructors);

module.exports = router;