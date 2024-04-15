const Booking = require( '../models/booking.js')

//create a booking
 const createBooking = async (req, res) => {
  try {
    const token = req.cookies.accessToken; 
  
    const booking = await Booking.create(req.body);
    res.status(200).json({ 
      message: 'Booking created successfully',
      data: booking, 
      success: true ,
      token
    });
  } catch (err) {
    res.status(500).json({
      message: 'Booking creation failed due to server error',
      error: err.message
    });
  }
};

// Controller function to get a single booking by ID
 const getBookingById = async (req, res) => {
  const id = req.params.id;
  try {
    const token = req.cookies.accessToken; 
    const book = await Booking.findById(id);
    if (!book) {
      return res.status(404).json({
        success: false,
        message: 'No booking found'
      });
    }
    res.status(200).json({
      success: true,
      message: 'Booking found',
      data: book,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

// Controller function to get all bookings
 const getAllBookings = async (req, res) => {
  try {
    const books = await Booking.find();
    const token = req.cookies.accessToken; 

    res.status(200).json({
      success: true,
      message: 'All bookings retrieved',
      data: books,
      token
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      success: false,
      message: 'Internal server error'
    });
  }
};

module.exports = { createBooking,getBookingById,getAllBookings };