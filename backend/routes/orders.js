// backend/routes/orders.js
const router = require('express').Router();
let Order = require('../models/order.model');

// Get all orders
router.route('/').get((req, res) => {
  Order.find()
    .then(orders => res.json(orders))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Create a new order
router.route('/add').post((req, res) => {
  const customerName = req.body.customerName;
  const items = req.body.items;
  const total = req.body.total;
  const status = req.body.status;

  const newOrder = new Order({
    customerName,
    items,
    total,
    status,
  });

  newOrder.save()
    .then(() => res.json('Order added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;
