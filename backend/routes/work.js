const router = require('express').Router();
let Work = require('../models/work.model');

router.route('/').get((req, res) => {
  Work.find()
    .then(works => res.json(works))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const newWork = new Work(req.body);

  newWork.save()
    .then(() => res.json('Work added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;