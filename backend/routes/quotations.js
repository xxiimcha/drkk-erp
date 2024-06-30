// backend/routes/quotations.js
const router = require('express').Router();
let Quotation = require('../models/quotation.model');

// Get all quotations
router.route('/').get((req, res) => {
  Quotation.find()
    .then(quotations => res.json(quotations))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a new quotation
router.route('/add').post((req, res) => {
  const customerName = req.body.customerName;
  const items = req.body.items;
  const total = req.body.total;
  const status = req.body.status;

  const newQuotation = new Quotation({
    customerName,
    items,
    total,
    status,
  });

  newQuotation.save()
    .then(() => res.json('Quotation added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
