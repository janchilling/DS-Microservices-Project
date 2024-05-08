// routes/checkoutRoutes.js
const express = require('express');
const router = express.Router();
const { createCheckoutSession } = require('../controllers/checkoutController');

router.post('/create-checkout-session', createCheckoutSession);

module.exports = router;
