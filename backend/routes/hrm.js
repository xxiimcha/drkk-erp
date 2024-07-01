// routes/hrm.js

const router = require('express').Router();
const bcrypt = require('bcrypt');
let Employee = require('../models/employee.model');
let User = require('../models/user.model');

router.route('/employees').get((req, res) => {
  Employee.find()
    .then(employees => res.json(employees))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/employees').post(async (req, res) => {
  const employeeData = req.body.employeeData;
  const user = req.body.user;

  try {
    // Hash the password
    const saltRounds = 10;
    const hashedPassword = await bcrypt.hash(user.password, saltRounds);
    user.password = hashedPassword;

    const newEmployee = new Employee(employeeData);
    const newUser = new User(user);

    await newEmployee.save();
    await newUser.save();

    res.json('Employee added and user created with hashed password!');
  } catch (err) {
    res.status(400).json('Error: ' + err);
  }
});

module.exports = router;
