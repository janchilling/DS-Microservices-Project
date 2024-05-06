const express = require('express');
const router = express.Router();

const { adminRegister, registerStudent, registerInstructor, loginUser} = require('../controllers/authController');

// Admin create account
router.post('/createAdmin', adminRegister);

// Student registering
router.post('/registerStudent',registerStudent);

// Instructor registering
router.post('/registerInstructor',registerInstructor);

// Login a user
router.post('/login',loginUser);


module.exports = router;