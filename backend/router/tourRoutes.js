const express = require('express')
const { createTour, deleteTour, getAllTour, getSingleTour, getTourBySearch, getTourCount, updateTour } = require('../controllers/tourController.js');
const { verifyAdmin } = require('../utlity/verifyToken.js');
const router =  express.Router()

//create a new tour
router.post('/',verifyAdmin,createTour)



//update  tour
router.put('/:id',verifyAdmin,updateTour)


//delete  tour
router.delete('/:id',verifyAdmin,deleteTour)


// get single tour
router.get('/:id',getSingleTour)

//getAll tour
router.get('/',getAllTour)

//get tour by search
router.get('/search/getTourBySearch', getTourBySearch)
//get count of tour
router.get('/search/getTourCount',getTourCount)








module.exports = router;