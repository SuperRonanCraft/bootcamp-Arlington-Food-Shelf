const router = require('express').Router();

//User Routes
router.use('/login', require('./loginRoute'));
router.use('/logout', require('./logoutRoute'));
router.use('/signup', require('./signupRoute'));

//Data Routes

module.exports = router;
