const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('menu');
});

module.exports = router;
