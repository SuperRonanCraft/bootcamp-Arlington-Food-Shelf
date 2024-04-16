const router = require('express').Router();

//User Routes
router.use('/login', require('./loginRoute'));
router.use('/logout', require('./logoutRoute'));

//Data Routes

module.exports = router;
