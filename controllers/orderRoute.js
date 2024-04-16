const router = require('express').Router();
const withAuth = require('../utils/auth');

router.get('/', withAuth, (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render('ordering');
});

module.exports = router;
