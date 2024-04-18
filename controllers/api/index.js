// Importing the Express module and creating a router instance
const router = require('express').Router();
// Importing route handlers for user-related routes
const userRoutes = require('./userRoutes');
// Importing route handlers for inventory-related routes
const inventoryRoute = require('./inventoryRoute');
// Importing route handlers for order-related routes
const orderRoute = require('./orderRoute');

//User Routes
router.use('/users', userRoutes);

//Data Routes
router.use('/inventory', inventoryRoute);

// Order Routes 
router.use('/order', orderRoute);

// // Exporting the router module for use in other parts of the application
module.exports = router;
