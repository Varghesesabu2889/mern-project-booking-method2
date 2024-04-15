const express = require('express')

const { login, register } = require( "../controllers/authController.js")
const router = express.Router();

// User registration route
router.post('/register', register);

// User login route
router.post('/login', login);

module.exports = router;
