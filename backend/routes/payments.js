// backend/routes/payments.js
const router = require('express').Router();
let Payment = require('../models/payment.model');

// Get all payments
router.route('/').get((req, res) => {
  Payment.find()
    .then(payments => res.json(payments))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a new payment
router.route('/add').post((req, res) => {
  const orderId = req.body.orderId;
  const amount = req.body.amount;
  const method = req.body.method;
  const status = req.body.status;

  const newPayment = new Payment({
    orderId,
    amount,
    method,
    status,
  });

  newPayment.save()
    .then(() => res.json('Payment added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
