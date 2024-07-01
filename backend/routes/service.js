const router = require('express').Router();
let Service = require('../models/service.model');

router.route('/').get((req, res) => {
  Service.find()
    .then(services => res.json(services))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newService = new Service(req.body);

  newService.save()
    .then(() => res.json('Service added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;