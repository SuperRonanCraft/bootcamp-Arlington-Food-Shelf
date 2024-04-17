const router = require('express').Router();

const apiRoutes = require('./api');
const uiRoutes = require('./uiRoutes');

//API Routes
router.use('/api', apiRoutes);

//UI Page Routes
router.use('/', uiRoutes);

module.exports = router;
