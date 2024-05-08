const router = require("express").Router();
const { isAdmin, isInstructor, isStudent } = require("../../../UserManagementService/src/middleware/authMiddleware");

const {
    createCourse,
    getAllCourses,
    updateCourse,
    deleteCourse,
    viewOneCourseById,
    searchCourse
} = require("../controllers/courseController");

//create new course
router.post("/addCourse", isAdmin, isInstructor, createCourse);

//view all courses
router.get("/", getAllCourses);

//update a course by id
router.put("/updateCourse/:id", isAdmin, isInstructor, updateCourse);

//delete course by id
router.delete("/deleteCourse/:id", isAdmin, isInstructor, deleteCourse);

//view one specific course by id
router.get("/getCourse/:id", isAdmin, isInstructor, viewOneCourseById);

//search course
router.get("/searchCourse/:key", searchCourse);

module.exports = router;