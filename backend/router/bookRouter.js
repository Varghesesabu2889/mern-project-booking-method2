const express = require('express')

const { createBooking, getBookingById, getAllBookings } =require( '../controllers/bookingController.js')
const { verifyAdmin, verifyUser } = require(  '../utlity/verifyToken.js');

const router = express.Router();

router.post('/',verifyAdmin, createBooking);
router.get('/:id',verifyUser, getBookingById);
router.get('/',verifyAdmin,verifyUser, getAllBookings);

module.exports=router
