// backend/routes/suppliers.js

const router = require('express').Router();
let Supplier = require('../models/supplier.model');

// Get all suppliers
router.route('/').get((req, res) => {
  Supplier.find()
    .then(suppliers => res.json(suppliers))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a new supplier
router.route('/add').post((req, res) => {
  const name = req.body.name;
  const contactInfo = req.body.contactInfo;
  const address = req.body.address;
  const itemsSupplied = req.body.itemsSupplied;

  const newSupplier = new Supplier({
    name,
    contactInfo,
    address,
    itemsSupplied,
  });

  newSupplier.save()
    .then(() => res.json('Supplier added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
