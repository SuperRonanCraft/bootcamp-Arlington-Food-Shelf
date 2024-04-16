const router = require('express').Router();

// Purpose: To render the homepage and login page
router.get('/', (req, res) => {
  res.render('homepage', {
    loggedIn: req.session.loggedIn,
  });
});

module.exports = router;
