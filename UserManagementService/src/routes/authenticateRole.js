const express = require("express");
const router = express.Router();
const authenticateRoleController = require('../controllers/authenticateRoleController');
const authMiddleware = require("../middleware/authMiddleware");

router.get('/admin', authMiddleware.isAdmin, authenticateRoleController.adminRole);
router.get('/instructor', authMiddleware.isInstructor, authenticateRoleController.instructorRole);
router.get('/student', authMiddleware.isStudent, authenticateRoleController.studentRole);

module.exports = router;
