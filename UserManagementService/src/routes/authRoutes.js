const express = require('express');
const router = express.Router();

const { adminRegister, registerUser, registerInstructor, loginUser} = require('../controllers/authController');

// Admin create account
router.post('/createAdmin', adminRegister);

// User registering
router.post('/registerUser',registerUser);

// Instructor registering
router.post('/registerInstructor',registerInstructor);

// Login a user
router.post('/login',loginUser);


module.exports = router;