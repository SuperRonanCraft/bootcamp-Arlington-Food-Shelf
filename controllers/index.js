const router = require('express').Router();

const apiRoutes = require('./api');
const uiRoutes = require('./uiRoutes');

//API Routes
router.use('/api', apiRoutes);

//UI Page Routes
router.use('/', uiRoutes);

//User Routes
// router.use('/login', require('./loginRoute'));
// router.use('/order', require('./orderRoute'));
// router.use('/about', require('./aboutRoute'));
// router.use('/stock', require('./stockRoute'));
// router.use('/resources', require('./resourcesRoute'));

module.exports = router;
