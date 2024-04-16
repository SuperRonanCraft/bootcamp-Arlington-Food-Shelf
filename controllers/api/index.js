const router = require('express').Router();
const loginRoute = require('./loginRoute');
const logoutRoute = require('./logoutRoute');
const signupRoute = require('./signupRoute');
const userRoutes = require('./userRoutes');
const userRoute = require('./userRoute');
const inventoyRoute = require('./inventoryRoute');

//User Routes
// router.use('/login', loginRoute);
// router.use('/logout', logoutRoute);
// router.use('/signup', signupRoute);
// router.use('/user', userRoute);
// router.use('/inventory', inventorRoute);

router.use('/users', userRoutes);

router.use('/inventory', inventoryRoute);
router.use('/user', userRoute);

module.exports = router;
