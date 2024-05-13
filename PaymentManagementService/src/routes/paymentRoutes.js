// routes/checkoutRoutes.js
const express = require('express');
const router = express.Router();
const { createPayment, getAllPayments} = require('../controllers/paymentController');

router.post('', createPayment);

// Get All Payments
router.get("/getAllPayments", getAllPayments);

module.exports = router;
