const router = require('express').Router();
let User = require('../models/user.model');
const bcrypt = require('bcryptjs');

// Get all users
router.route('/').get((req, res) => {
  User.find()
    .then((users) => res.json(users))
    .catch((err) => res.status(400).json('Error: ' + err));
});

// Add a new user
router.route('/add').post(async (req, res) => {
  const { name, email, birthday, username, password } = req.body;

  try {
    // Generate a salt
    const salt = await bcrypt.genSalt(10);
    // Hash the password with the salt
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      name,
      email,
      birthday,
      username,
      password: hashedPassword,
    });

    await newUser.save();
    res.json('User added!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
