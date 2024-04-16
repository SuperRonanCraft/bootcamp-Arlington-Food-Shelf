const router = require('express').Router();

//User Routes
router.use('/login', require('./loginRoute'));
router.use('/logout', require('./logoutRoute'));
router.use('/signup', require('./signupRoute'));
router.use('/user', require('./userRoute'));

//Data Routes
router.use('/inventory', require('./inventoryRoute'));
router.use('/order', require('./orderRoute'));

module.exports = router;
