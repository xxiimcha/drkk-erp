const router = require('express').Router();
let SLA = require('../models/sla.model');

// Get all SLAs
router.route('/').get((req, res) => {
  SLA.find()
    .then(slas => res.json(slas))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Add a new SLA
router.route('/add').post((req, res) => {
  const { customerName, agreementDetails, effectiveDate, expirationDate } = req.body;

  const newSLA = new SLA({ customerName, agreementDetails, effectiveDate, expirationDate });

  newSLA.save()
    .then(() => res.json('Service Level Agreement added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
