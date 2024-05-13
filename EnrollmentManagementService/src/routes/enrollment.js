const router = require("express").Router();
//const { isAdmin, isInstructor, isStudent } = require("../../../UserManagementService/src/middleware/authMiddleware");
const { isAdmin, isInstructor, isStudent } = require("../middleware/authMiddleware");

const {
    createEnrollment,
    getEnrollmentsByUser,
    getAllEnrollments,
    getEnrollmentsByCourse,
    updateEnrollmentStatus,
    cancelEnrollment,
    checkEnrollmentStatus,
    getEnrollmentByUserCourse
} = require("../controllers/enrollmentController");

// Create Enrollment
router.post("/createEnrollment", createEnrollment);

// Get All Enrollments
router.get("/getAllEnrollments", getAllEnrollments);

// Get Enrollments by User
router.get("/user/:userId", getEnrollmentsByUser);

// Get Enrollments by Course
router.get("/course/:courseId", getEnrollmentsByCourse);

// Update Enrollment Status
router.put("/updateStatus/:enrollmentId", updateEnrollmentStatus);

// Cancel Enrollment
router.put("/cancel/:enrollmentId", isAdmin, cancelEnrollment);

// Check Enrollment Status
router.get("/status/:enrollmentId", isAdmin, checkEnrollmentStatus);

// Get Enrollment by User and Course
router.get("/user/:userId/course/:courseId", getEnrollmentByUserCourse);

module.exports = router;
