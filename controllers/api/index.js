// Importing the Express module and creating a router instance
const router = require('express').Router();
// Importing route handlers for user-related routes
const userRoutes = require('./userRoutes');
// Importing route handlers for inventory-related routes
const inventoryRoute = require('./inventoryRoute');
const orderRoute = require('./orderRoute');

//User Routes
router.use('/users', userRoutes);

//Data Routes
router.use('/inventory', inventoryRoute);
router.use('/order', orderRoute);

module.exports = router;
