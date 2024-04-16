const router = require('express').Router();

//Api Routes
router.use('/api', require('./api/index'));

//Data Routes
router.use('/', require('./homeRoute'));

//User Routes
router.use('/login', require('./loginRoute'));
router.use('/order', require('./orderRoute'));
router.use('/about', require('./aboutRoute'));
router.use('/menu', require('./menuRoute'));
router.use('/resources', require('./resourcesRoute'));

module.exports = router;
