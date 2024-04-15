const router = require('express').Router();

router.post('/', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).json({
        loggedOut: true,
        message: 'You are now logged out!',
      });
    });
  } else {
    res.status(404).json({
      loggedOut: false,
      message: 'You were not logged in!',
    });
  }
});

module.exports = router;
