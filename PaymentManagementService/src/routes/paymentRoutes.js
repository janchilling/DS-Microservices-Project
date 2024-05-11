// routes/checkoutRoutes.js
const express = require('express');
const router = express.Router();
const { createPayment} = require('../controllers/paymentController');

router.post('', createPayment);

module.exports = router;
