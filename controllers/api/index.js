// Importing the Express module and creating a router instance
const router = require('express').Router();
const userRoutes = require('./userRoutes');
const inventoryRoute = require('./inventoryRoute');
const orderRoute = require('./orderRoute');

//User Routes
router.use('/users', userRoutes);

//Data Routes
router.use('/inventory', inventoryRoute);
router.use('/order', orderRoute);

module.exports = router;
