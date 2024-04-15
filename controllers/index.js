const router = require('express').Router();

// const uiRoutes = require('./uiRoutes');

// router.use('/', uiRoutes);
router.use('/api', require('./api/index'));
router.use('/login', require('./loginRoute'));

router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
