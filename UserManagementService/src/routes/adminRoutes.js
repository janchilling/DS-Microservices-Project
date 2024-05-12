const router = require("express").Router();

const { allAdmins } = require('../controllers/adminController');

// Get all the admins
router.get("/", allAdmins);

module.exports = router;