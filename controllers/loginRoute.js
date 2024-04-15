const router = require('express').Router();

router.get('/', (req, res) => {
  const loggedIn = req.session.loggedIn;
  res.render('login', { loggedIn });
});

module.exports = router;
