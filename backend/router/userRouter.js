
const express = require('express')

const { updateUser, deleteUser, getSingleUser, getAllUser } = require('../controllers/userController.js');

const router = express.Router();

const {verifyUser,verifyAdmin} = require ('../utlity/verifyToken.js')

// Update user
router.put('/:id',verifyUser, updateUser);

// Delete user
router.delete('/:id',verifyUser, deleteUser);

// Get single user
router.get('/:id',verifyUser, getSingleUser);

// Get all users
router.get('/', verifyAdmin,getAllUser);

module.exports=router